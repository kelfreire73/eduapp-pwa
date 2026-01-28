import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { currentUser, userProfile, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  }

  const modulos = [
    { id: 1, titulo: 'Matemática Básica', aulas: 12, progresso: 75, cor: '#3b82f6' },
    { id: 2, titulo: 'Português', aulas: 15, progresso: 45, cor: '#10b981' },
    { id: 3, titulo: 'História', aulas: 10, progresso: 90, cor: '#f59e0b' },
    { id: 4, titulo: 'Ciências', aulas: 8, progresso: 30, cor: '#8b5cf6' }
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <div style={styles.logo}>
              <span style={styles.logoIcon}>📚</span>
              <span style={styles.logoText}>EduApp</span>
            </div>
          </div>
          <div style={styles.headerRight}>
            <div style={styles.userInfo}>
              <div style={styles.avatar}>
                {currentUser?.displayName?.[0] || '👤'}
              </div>
              <div>
                <div style={styles.userName}>{currentUser?.displayName}</div>
                <div style={styles.userRole}>{userProfile?.role === 'admin' ? 'Administrador' : 'Estudante'}</div>
              </div>
            </div>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.content}>
          {/* Welcome Section */}
          <section style={styles.welcomeSection}>
            <h1 style={styles.welcomeTitle}>
              Olá, {currentUser?.displayName}! 👋
            </h1>
            <p style={styles.welcomeSubtitle}>
              Continue sua jornada de aprendizado
            </p>
          </section>

          {/* Admin Button */}
          {isAdmin && (
            <button
              onClick={() => navigate('/admin')}
              style={styles.adminBtn}
            >
              🛠️ Painel Administrativo
            </button>
          )}

          {/* Módulos Grid */}
          <section style={styles.modulosSection}>
            <h2 style={styles.sectionTitle}>Seus Módulos</h2>
            <div style={styles.modulosGrid}>
              {modulos.map((modulo) => (
                <div key={modulo.id} style={styles.moduloCard}>
                  <div style={{...styles.moduloIcon, backgroundColor: modulo.cor}}>
                    📖
                  </div>
                  <h3 style={styles.moduloTitulo}>{modulo.titulo}</h3>
                  <p style={styles.moduloAulas}>{modulo.aulas} aulas</p>
                  
                  <div style={styles.progressContainer}>
                    <div style={styles.progressBar}>
                      <div
                        style={{
                          ...styles.progressFill,
                          width: `${modulo.progresso}%`,
                          backgroundColor: modulo.cor
                        }}
                      />
                    </div>
                    <span style={styles.progressText}>{modulo.progresso}%</span>
                  </div>
                  
                  <button style={{...styles.moduloBtn, backgroundColor: modulo.cor}}>
                    Continuar
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6'
  },
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
    padding: '16px 0'
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoIcon: {
    fontSize: '32px'
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  userName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1f2937'
  },
  userRole: {
    fontSize: '12px',
    color: '#6b7280'
  },
  logoutBtn: {
    padding: '8px 16px',
    background: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  },
  welcomeSection: {
    textAlign: 'center'
  },
  welcomeTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  },
  welcomeSubtitle: {
    fontSize: '18px',
    color: '#6b7280'
  },
  adminBtn: {
    padding: '16px',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(245,158,11,0.3)'
  },
  modulosSection: {
    marginTop: '20px'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '20px'
  },
  modulosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px'
  },
  moduloCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  moduloIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px'
  },
  moduloTitulo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1f2937'
  },
  moduloAulas: {
    fontSize: '14px',
    color: '#6b7280'
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  progressBar: {
    flex: 1,
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    transition: 'width 0.3s'
  },
  progressText: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#6b7280'
  },
  moduloBtn: {
    padding: '12px',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '8px'
  }
};
