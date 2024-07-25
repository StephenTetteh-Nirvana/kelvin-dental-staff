const patients = localStorage.getItem("patients") !== null ? JSON.parse(localStorage.getItem("patients")) : []
const arrowBox = document.querySelector(".arrowBox")
const table = document.getElementById("data_table")

arrowBox.addEventListener("click",()=>{
    window.history.back()
})

document.addEventListener('DOMContentLoaded',()=>{
    patientsList()
})

const patientsList = () => {
    if (patients.length > 0) {
        patients.forEach((patient) => {
            table.innerHTML += `  
                <tr>
                    <td>${patient.name}</td>
                    <td>${patient.age}</td>
                    <td>${patient.contact}</td>
                    <td>${patient.date}</td>
                </tr>
            `;
        });
    } else {
        table.innerHTML += `
            <tr>
                <td>No patients yet</td>
            </tr>
        `;
    }
}
