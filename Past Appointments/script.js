import { collection,onSnapshot } from "firebase/firestore"
import { db } from "../firebase"

const pastAppointments = []

const expiredAppointments = localStorage.getItem("pastAppointments") !== null ? JSON.parse(localStorage.getItem("pastAppointments")) : []
const arrowBox = document.querySelector(".arrowBox")
const table = document.getElementById("data_table")

arrowBox.addEventListener("click",()=>{
    window.history.back()
})

document.addEventListener('DOMContentLoaded',()=>{
    Appointments()
    pastAppointmentsLocal()
})

const pastAppointmentsLocal = () => {
    const unsub = onSnapshot(collection(db,"Past Appointments"),(snapshot)=>{
        snapshot.forEach((doc)=>{
            pastAppointments.unshift({id:doc.id,...doc.data()})
        })
        localStorage.setItem("pastAppointments",JSON.stringify(pastAppointments))
    })
    return unsub;
}


const Appointments = () => {
    if (expiredAppointments.length > 0) {
        expiredAppointments.forEach((patient) => {
            table.innerHTML += `  
                <tr>
                    <td>${patient.name}</td>
                    <td>${patient.date}</td>
                    <td>${patient.time}</td>
                    <td>${patient.contact}</td>
                    <td>Expired</td>
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