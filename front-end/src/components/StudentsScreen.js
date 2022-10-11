import axios from 'axios';
import { useEffect, useState } from 'react';

function StudentScreen() {
  const [students, setStudents] = useState(null);

  function renderStudents() {
    return students.map(student => <h1 key={student.name}>{student.name}</h1>);
  }

  useEffect(async () => {
    const API_URL = process.env.REACT_APP_BASE_URL;

    try {
      const response = await axios.get(`${API_URL}/students`);
      const students = response.data;
      if (!students) {
        alert('Xablau! Não há estudantes cadastrados para o sorteio!');
      } else {
        setStudents(students);
      }
    } catch (error) {
      alert('Não foi possível realizar o sorteio!');
    }
  }, []);

  return students ? renderStudents : 'Estou na rota /all Carregando...';
}

export default StudentScreen;
