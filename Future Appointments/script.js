import { collection,onSnapshot } from "firebase/firestore"
import { db } from "../firebase"

const futureAppointments = []

const futureAppointmentsLocal = localStorage.getItem("futureAppointments") !== null ? JSON.parse(localStorage.getItem("futureAppointments")) : []
const arrowBox = document.querySelector(".arrowBox")
const table = document.getElementById("data_table")

arrowBox.addEventListener("click",()=>{
    window.history.back()
})

document.addEventListener('DOMContentLoaded',()=>{
    RequestFutureAppointments()
    Appointments()
})

const RequestFutureAppointments = () => {
    const unsub = onSnapshot(collection(db,"Future Appointments"),(snapshot)=>{
        snapshot.forEach((doc)=>{
            futureAppointments.unshift({id:doc.id,...doc.data()})
        })
        localStorage.setItem("futureAppointments",JSON.stringify(futureAppointments))
    })
    return unsub;
}

const Appointments = () => {
    if (futureAppointmentsLocal.length > 0) {
        futureAppointmentsLocal.forEach((patient) => {
            table.innerHTML += `  
                <tr>
                    <td>${patient.name}</td>
                    <td>${patient.date}</td>
                    <td>${patient.time}</td>
                    <td>${patient.contact}</td>
                    <td>Still Available</td>
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