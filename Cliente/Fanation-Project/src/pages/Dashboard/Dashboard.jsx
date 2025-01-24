import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import verifyTokenAPI from '../../services/verifyTokenAPI'
import './Dashboard.css'

const Dashboard = () => {
    const navigate = useNavigate()
    const url = 'http://localhost:3000/users'

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('token') // Recupera o token do localStorage
            const idUser = localStorage.getItem('idUser') // Recupera o id do usuário

            if (!token || !idUser) {
                alert('Você precisa fazer login!')
                navigate('/') // Redireciona para o login
                return
            }

            const verify = await verifyTokenAPI(
                url,
                localStorage.getItem('idUser'),
                localStorage.getItem('token')
            )
            if (!verify) {
                alert('Sessão expirada. Faça login novamente!')
                localStorage.removeItem('token') // Remove o token inválido
                localStorage.removeItem('idUser')
                
                navigate('/') // Redireciona para o login
            }
        }

        checkToken()
    }, [navigate])

    const handleLogout = () => {
        
        localStorage.removeItem("token")
        localStorage.removeItem("idUser")
        navigate("/login")
      }
    return(
        <>
            <div className='DashboardContainer'>
                <h1>Bem-vindo ao Dashboard</h1>
                <p>Você está autenticado!</p>
                <button className='bottonLogout'onClick={handleLogout}>Sair</button>
            </div>
        </>
    )

}

export default Dashboard