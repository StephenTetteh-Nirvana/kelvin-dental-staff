import { addDoc, collection, deleteDoc, onSnapshot,doc } from 'firebase/firestore'
import { db } from './firebase.js'

const patients = []
const futureAppointments = []
const pastAppointments = []

let currentTime = new Date()
let hours = currentTime.getHours()
let minutes = currentTime.getMinutes()
let ampm = hours >= 12 ? 'PM' : 'AM'
let formattedHours = hours % 12 || 12;
let finalTime;
if (ampm === 'AM') {
  finalTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;
} else {
  finalTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}
console.log(finalTime);

let date = new Date()
console.log(date.toLocaleDateString())

document.addEventListener("DOMContentLoaded",function(){
    patientsLists()
    RequestFutureAppointments()
    RequestPastAppointments()
})

const patientsLists = () => {
    const unsub = onSnapshot(collection(db,"Patients"),(snapshot)=>{
        snapshot.forEach((doc)=>{
            patients.unshift({id:doc.id,...doc.data()})
        })
        localStorage.setItem("patients",JSON.stringify(patients))
    })
    return unsub;
}

const RequestFutureAppointments = () => {
    const unsub = onSnapshot(collection(db,"Future Appointments"),(snapshot)=>{
        snapshot.forEach((doc)=>{
            futureAppointments.unshift({id:doc.id,...doc.data()})
        })
        localStorage.setItem("futureAppointments",JSON.stringify(futureAppointments))
    })
    return unsub;
}

const RequestPastAppointments = () => {
    const unsub = onSnapshot(collection(db,"Future Appointments"),async(snapshot)=>{
        for(let document of snapshot.docs){
            let appointmentTime = document.data().time
            let appointmentDate = document.data().date
            if(finalTime >= appointmentTime){
                const colRef = collection(db,"Past Appointments")
                await addDoc(colRef,document.data())
                await deleteDoc(doc(db, "Future Appointments", document.id));
            }else if (date < appointmentDate){
                const colRef = collection(db,"Past Appointments")
                await addDoc(colRef,document.data())
                await deleteDoc(doc(db, "Future Appointments", document.id));
            }
            else{
                console.log("Still Available")
            }
        }
        await pastAppointmentsLocal()
    })
    return unsub;
}

const pastAppointmentsLocal = () => {
    const unsub = onSnapshot(collection(db,"Past Appointments"),(snapshot)=>{
        snapshot.forEach((doc)=>{
            pastAppointments.unshift({id:doc.id,...doc.data()})
        })
        localStorage.setItem("pastAppointments",JSON.stringify(pastAppointments))
    })
    return unsub;
}