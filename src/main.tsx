import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = {
    error: null as Error | null
  }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            background: '#05080d',
            color: '#eaf7ff',
            display: 'grid',
            placeItems: 'center',
            padding: 30,
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <div
            style={{
              maxWidth: 760,
              width: '100%',
              border: '1px solid #ff4f6d',
              borderRadius: 18,
              padding: 28,
              background: '#0b1119',
              boxShadow: '0 0 50px rgba(255,79,109,.12)'
            }}
          >
            <div
              style={{
                fontSize: 12,
                letterSpacing: 2,
                color: '#ff6f88',
                fontWeight: 800
              }}
            >
              AMOSTRA • RECUPERAÇÃO
            </div>

            <h1 style={{ margin: '10px 0', fontSize: 28 }}>
              O sistema encontrou um erro
            </h1>

            <p style={{ color: '#91a4b8' }}>
              A tela foi protegida para não ficar branca.
              Veja o erro abaixo.
            </p>

            <pre
              style={{
                whiteSpace: 'pre-wrap',
                background: '#05080d',
                padding: 16,
                borderRadius: 10,
                color: '#ff9daf',
                overflow: 'auto'
              }}
            >
              {this.state.error.message}
            </pre>

            <button
              onClick={() => location.reload()}
              style={{
                marginTop: 12,
                padding: '11px 16px',
                border: 0,
                borderRadius: 9,
                background: '#08d8f2',
                color: '#031017',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              RECARREGAR AMOSTRA
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
)