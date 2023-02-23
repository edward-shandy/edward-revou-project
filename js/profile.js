// fungsi untuk navigate halaman navbar
function homeclick() {
    window.location.href = "Edward-Index.html"
}
function ourprofile() {
    window.location.href = "Profile.html";
}

// input nama saat landing di profile page
var yourname = prompt("Masukkan nama kamu");
            document.getElementById("your-name").innerText = yourname;

// fungsi untuk mengisi form pada profile page
const form = document.getElementById('form-messageus');

        form.addEventListener("submit", function(event){
            event.preventDefault(); // untuk menghentikan submit form

            const name = form.elements["inputname"].value;
            const date = form.elements["date"].value;
            const gender = form.elements["gender"].value;
            const message = form.elements["textarea-2"].value;

            document.getElementById("outputname").textContent = name;
            document.getElementById("outputdate").textContent = date;
            document.getElementById("outputgender").textContent = gender;
            document.getElementById("outputmessage").textContent = message;

            form.reset(); // reset form setelah disubmit
        });
            // untuk validasi jika form tidak diisi dengan benar
        function validateform() {
            var name= document.getElementById("messageus-name").value;
            var date= document.getElementById("messageus-date").value;
            var gender = document.querySelector('input[name="gender"]:checked');
            var textarea= document.getElementById("messageus-textarea").value;

            if (name == "" || date == "" || gender == "" || textarea == ""){
                alert ("Data harus diisi");
                return false
            }
        }