import { Injectable } from '@angular/core';
import { Experience } from './experience.service';
import { from, map, Observable } from 'rxjs';

// 1. Importamos la inicialización nativa de Firebase
import { initializeApp } from 'firebase/app';
import { collection, getDocs, query, getFirestore, orderBy } from 'firebase/firestore/lite';
import { Certification } from './certifications.service';

// 2. Coloca aquí tus credenciales reales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3mLoqy1-IKV6iDAQzRwJsi3uCJeYN6d8",
  authDomain: "jesuseduaardo-cv.firebaseapp.com",
  databaseURL: "https://jesuseduaardo-cv.firebaseio.com",
  projectId: "jesuseduaardo-cv",
  storageBucket: "jesuseduaardo-cv.firebasestorage.app",
  messagingSenderId: "502720339040",
  appId: "1:502720339040:web:fb3665f316dcf8dcc37705"
};

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private readonly app = initializeApp(firebaseConfig);
  private readonly _firestore = getFirestore(this.app);

  constructor() { }

    getMinorCertifications(): Observable<Certification[]> {
    const expCollection = collection(this._firestore, 'minor_certifications');
    const expQuery = query(expCollection, orderBy('fechaFin', 'desc'));

    return from(getDocs(expQuery)).pipe(
      map(snapshot => {
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as unknown as Certification[];
      })
    );
  }

  getCertifications(): Observable<Certification[]> {
    const expCollection = collection(this._firestore, 'certifications');
    const expQuery = query(expCollection, orderBy('fechaFin', 'desc'));

    return from(getDocs(expQuery)).pipe(
      map(snapshot => {
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as unknown as Certification[];
      })
    );
  }

  getExperiences(): Observable<Experience[]> {
    const expCollection = collection(this._firestore, 'experiences');
    const expQuery = query(expCollection, orderBy('fechaEgreso', 'desc'));

    return from(getDocs(expQuery)).pipe(
      map(snapshot => {
        const list = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as unknown as Experience[];

        // Ordenar en memoria: vacíos primero, luego descendente
        return list.sort((a, b) => {
          const valA = a.fechaEgreso;
          const valB = b.fechaEgreso;

          const esVacioA = !valA || valA === '';
          const esVacioB = !valB || valB === '';

          if (esVacioA && !esVacioB) return -1; // A va primero
          if (!esVacioA && esVacioB) return 1;  // B va primero
          if (esVacioA && esVacioB) return 0;   // Iguales

          // Ambos tienen fecha: orden descendente estricto
          return valB > valA ? 1 : valB < valA ? -1 : 0;
        });
      })
    );
  }

  getAbout(): Observable<any> {
    const expCollection = collection(this._firestore, 'about');
    const expQuery = query(expCollection);

    return from(getDocs(expQuery)).pipe(
      map(snapshot => {
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      })
    );
  }
}
