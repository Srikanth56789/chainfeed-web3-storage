async function upload() {

const fileInput = document.getElementById("fileInput")
const file = fileInput.files[0]

const formData = new FormData()
formData.append("file", file)

const res = await fetch("http://localhost:3000/upload", {
method: "POST",
body: formData
})

const data = await res.json()

document.getElementById("result").innerText =
"Media ID: " + data.data.id
}