<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const projects = ref([])
const loading = ref(false)

// Form Data
const form = ref({
  title: '',
  category: '',
  description: '',
  imageFile: null
})

// 1. Ambil Data Project
const fetchProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) console.error(error)
  else projects.value = data
}

// 2. Handle File Gambar
const handleFileUpload = (event) => {
  form.value.imageFile = event.target.files[0]
}

// 3. Simpan Project
const saveProject = async () => {
  if (!form.value.title || !form.value.imageFile) {
    alert("Judul dan Gambar wajib diisi!")
    return
  }

  loading.value = true

  try {
    const file = form.value.imageFile
    const fileName = Date.now() + '_' + file.name

    // PERBAIKAN 1: Hapus 'data: uploadData' karena gak dipake
    const { error: uploadError } = await supabase
      .storage
      .from('portfolio-images')
      .upload(fileName, file)

    if (uploadError) throw uploadError

    // Dapatkan Link Gambar
    const { data: publicUrlData } = supabase
      .storage
      .from('portfolio-images')
      .getPublicUrl(fileName)

    const imageUrl = publicUrlData.publicUrl

    // Simpan ke Database
    const { error: insertError } = await supabase
      .from('projects')
      .insert([
        {
          title: form.value.title,
          category: form.value.category,
          description: form.value.description,
          image_url: imageUrl
        }
      ])

    if (insertError) throw insertError

    alert("Berhasil Upload Boss! 🔥")

    // Reset Form
    form.value = { title: '', category: '', description: '', imageFile: null }
    document.getElementById('fileInput').value = ""
    fetchProjects()

  } catch (error) {
    alert("Gagal: " + error.message)
  } finally {
    loading.value = false
  }
}

// 4. Hapus Project
// PERBAIKAN 2: Hapus parameter 'imageUrl' karena belum dipake
const deleteProject = async (id) => {
  if(!confirm("Yakin mau hapus?")) return

  const { error } = await supabase.from('projects').delete().eq('id', id)

  if (!error) fetchProjects()
  else alert("Gagal hapus")
}

onMounted(() => {
  fetchProjects()
})
</script>

<template>
  <div class="admin-container">
    <h1>Dashboard Admin 🛠️</h1>

    <div class="glass-card form-box">
      <input v-model="form.title" placeholder="Judul Project (Contoh: Web Vixel)" />
      <input v-model="form.category" placeholder="Kategori (Contoh: Web Dev / Videography)" />
      <textarea v-model="form.description" placeholder="Deskripsi singkat project..." rows="3"></textarea>

      <div class="file-area">
        <label>Upload Cover Image:</label>
        <input type="file" id="fileInput" @change="handleFileUpload" accept="image/*" />
      </div>

      <button @click="saveProject" :disabled="loading" class="save-btn">
        {{ loading ? 'Lagi Upload...' : '🚀 PUBLISH PROJECT' }}
      </button>
    </div>

    <div class="project-list">
      <h2>List Project Active</h2>
      <div v-for="item in projects" :key="item.id" class="project-item">
        <img :src="item.image_url" alt="" class="thumb" />
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.category }}</p>
        </div>
        <button @click="deleteProject(item.id)" class="del-btn">Hapus</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  max-width: 800px; margin: 100px auto; padding: 20px; color: white;
}
h1 { text-align: center; margin-bottom: 30px; font-family: 'Clash Display'; }

.form-box {
  padding: 30px; display: flex; flex-direction: column; gap: 15px; margin-bottom: 50px;
}
input, textarea {
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
  padding: 15px; color: white; border-radius: 10px; font-family: sans-serif;
}
.file-area { margin: 10px 0; }

.save-btn {
  background: #b084ff; color: white; padding: 15px; border: none;
  border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s;
}
.save-btn:hover { transform: scale(1.02); }
.save-btn:disabled { opacity: 0.7; cursor: not-allowed; }

.project-list { display: flex; flex-direction: column; gap: 15px; }
.project-item {
  display: flex; align-items: center; gap: 20px; padding: 15px;
  background: rgba(255,255,255,0.05); border-radius: 10px;
}
.thumb { width: 80px; height: 60px; object-fit: cover; border-radius: 5px; }
.info { flex: 1; }
.info h3 { margin: 0; font-size: 1.1rem; }
.info p { margin: 5px 0 0; font-size: 0.9rem; color: #aaa; }
.del-btn { background: #ff4d4d; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; }
</style>
