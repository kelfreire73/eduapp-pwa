import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Verifique seu e-mail para instruções de recuperação');
    } catch (error) {
      setError('Falha ao enviar e-mail de recuperação');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',padding:'20px'}}>
      <div style={{background:'white',borderRadius:'16px',boxShadow:'0 20px 60px rgba(0,0,0,0.3)',padding:'40px',width:'100%',maxWidth:'400px'}}>
        <div style={{textAlign:'center',marginBottom:'30px'}}>
          <div style={{width:'80px',height:'80px',margin:'0 auto 20px',background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',borderRadius:'20px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'40px'}}>🔑</div>
          <h1 style={{fontSize:'32px',fontWeight:'bold',color:'#1f2937',marginBottom:'8px'}}>Recuperar Senha</h1>
          <p style={{fontSize:'16px',color:'#6b7280'}}>Digite seu e-mail para recuperação</p>
        </div>
        {error && <div style={{background:'#fee2e2',border:'1px solid #ef4444',color:'#991b1b',padding:'12px',borderRadius:'8px',marginBottom:'20px',fontSize:'14px'}}>⚠️ {error}</div>}
        {message && <div style={{background:'#d1fae5',border:'1px solid #10b981',color:'#065f46',padding:'12px',borderRadius:'8px',marginBottom:'20px',fontSize:'14px'}}>✅ {message}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom:'20px'}}>
            <label style={{fontSize:'14px',fontWeight:'600',color:'#374151',display:'block',marginBottom:'8px'}}>E-mail</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required style={{width:'100%',padding:'12px 16px',border:'2px solid #e5e7eb',borderRadius:'8px',fontSize:'16px'}} placeholder="seu@email.com"/>
          </div>
          <button type="submit" disabled={loading} style={{width:'100%',padding:'14px',background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',color:'white',border:'none',borderRadius:'8px',fontSize:'16px',fontWeight:'600',cursor:'pointer',opacity:loading?'0.6':'1'}}>{loading ? 'Enviando...' : 'Enviar Link'}</button>
        </form>
        <div style={{marginTop:'30px',textAlign:'center'}}><Link to="/login" style={{color:'#667eea',textDecoration:'none',fontWeight:'600'}}>← Voltar para Login</Link></div>
      </div>
    </div>
  );
}
