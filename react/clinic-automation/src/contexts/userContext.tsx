"use client"
import { PatientListActions, patientListReducer } from "@/reducers/patientsReducer";
import { Patient } from "@/types/Patient";
import { Dispatch, ReactNode, createContext, useContext, useReducer, useState } from "react"

// Type do contexto, com os dados disponíveis nele e seus modificadores
type UserContextType = {
  patientList: Patient[],
  dispatchPatient: Dispatch<PatientListActions>;
  username: string,
}

// Início do contexto com valores vazios configurados
const userContext = createContext<UserContextType>({
  patientList:[],
  dispatchPatient: ()=>{},
  username: '',
})

// Provider do contexto com set dos valores e criação do component
export const UserContext = ({children}:{children:ReactNode}) => {
  // Declaração das variáveis com inserção de valores no contexto
  const [patientList, dispatchPatient] = useReducer(patientListReducer, []);
  const [username, setUsername] = useState('');

  return (
    <userContext.Provider 
    value={{patientList, dispatchPatient, username}}>

      {children}

    </userContext.Provider>
  );
}

// export de atalho usePage para criar acesso ao contexto mais rápido
export const useUser = () =>{
  return useContext(userContext)
}