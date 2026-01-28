import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { useAuth } from '../contexts/AuthContext';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const snapshot = await getDocs(collection(db, 'users'));
      const usersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(usersData);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    } finally {
      setLoading(false);
    }
  }

  async function toggleUserStatus(userId, currentStatus) {
    try {
      await updateDoc(doc(db, 'users', userId), {
        isActive: !currentStatus
      });
      loadUsers();
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  }

  async function handleLogout() {
    await logout();
    navigate('/login');
  }

  if (loading) return <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Carregando...</div>;

  return (
    <div style={{minHeight:'100vh',backgroundColor:'#f3f4f6'}}>
      <header style={{backgroundColor:'white',borderBottom:'1px solid #e5e7eb',padding:'16px 0'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1 style={{fontSize:'24px',fontWeight:'bold',color:'#1f2937'}}>🛠️ Painel Administrativo</h1>
          <div style={{display:'flex',gap:'12px'}}>
            <button onClick={()=>navigate('/dashboard')} style={{padding:'8px 16px',background:'#6366f1',color:'white',border:'none',borderRadius:'8px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>← Dashboard</button>
            <button onClick={handleLogout} style={{padding:'8px 16px',background:'#ef4444',color:'white',border:'none',borderRadius:'8px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>Sair</button>
          </div>
        </div>
      </header>
      <main style={{maxWidth:'1200px',margin:'0 auto',padding:'40px 20px'}}>
        <div style={{backgroundColor:'white',borderRadius:'16px',boxShadow:'0 4px 12px rgba(0,0,0,0.08)',overflow:'hidden'}}>
          <div style={{padding:'24px',borderBottom:'1px solid #e5e7eb'}}>
            <h2 style={{fontSize:'20px',fontWeight:'bold',color:'#1f2937'}}>Gerenciar Usuários ({users.length})</h2>
          </div>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead>
                <tr style={{backgroundColor:'#f9fafb'}}>
                  <th style={{padding:'12px 24px',textAlign:'left',fontSize:'14px',fontWeight:'600',color:'#6b7280'}}>Nome</th>
                  <th style={{padding:'12px 24px',textAlign:'left',fontSize:'14px',fontWeight:'600',color:'#6b7280'}}>E-mail</th>
                  <th style={{padding:'12px 24px',textAlign:'left',fontSize:'14px',fontWeight:'600',color:'#6b7280'}}>Tipo</th>
                  <th style={{padding:'12px 24px',textAlign:'left',fontSize:'14px',fontWeight:'600',color:'#6b7280'}}>Status</th>
                  <th style={{padding:'12px 24px',textAlign:'left',fontSize:'14px',fontWeight:'600',color:'#6b7280'}}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user)=>(
                  <tr key={user.id} style={{borderBottom:'1px solid #e5e7eb'}}>
                    <td style={{padding:'16px 24px',fontSize:'14px',color:'#1f2937',fontWeight:'500'}}>{user.displayName}</td>
                    <td style={{padding:'16px 24px',fontSize:'14px',color:'#6b7280'}}>{user.email}</td>
                    <td style={{padding:'16px 24px'}}>
                      <span style={{padding:'4px 12px',borderRadius:'12px',fontSize:'12px',fontWeight:'600',backgroundColor:user.role==='admin'?'#fef3c7':'#dbeafe',color:user.role==='admin'?'#92400e':'#1e40af'}}>{user.role==='admin'?'Admin':'Estudante'}</span>
                    </td>
                    <td style={{padding:'16px 24px'}}>
                      <span style={{padding:'4px 12px',borderRadius:'12px',fontSize:'12px',fontWeight:'600',backgroundColor:user.isActive?'#d1fae5':'#fee2e2',color:user.isActive?'#065f46':'#991b1b'}}>{user.isActive?'Ativo':'Bloqueado'}</span>
                    </td>
                    <td style={{padding:'16px 24px'}}>
                      <button onClick={()=>toggleUserStatus(user.id,user.isActive)} style={{padding:'6px 16px',background:user.isActive?'#ef4444':'#10b981',color:'white',border:'none',borderRadius:'6px',fontSize:'12px',fontWeight:'600',cursor:'pointer'}}>{user.isActive?'Bloquear':'Desbloquear'}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
