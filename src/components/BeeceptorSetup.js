import React, { useState } from 'react';

const BeeceptorSetup = () => {
  const [showSetup, setShowSetup] = useState(false);

  const rules = [
    {
      title: "GET /users - Listar usuários",
      method: "GET",
      path: "/users",
      response: `[
  {"id": 1, "name": "João Silva", "email": "joao@test.com", "age": 25},
  {"id": 2, "name": "Maria Santos", "email": "maria@test.com", "age": 30},
  {"id": 3, "name": "Pedro Oliveira", "email": "pedro@test.com", "age": 28}
]`
    },
    {
      title: "POST /users - Criar usuário",
      method: "POST",
      path: "/users", 
      response: `{
  "id": 101,
  "name": "{{request.body.name}}",
  "email": "{{request.body.email}}",
  "age": "{{request.body.age}}",
  "created": true,
  "timestamp": "2024-01-01T10:00:00Z"
}`
    },
    {
      title: "PUT /users/:id - Atualizar usuário",
      method: "PUT",
      path: "/users/*",
      response: `{
  "id": 1,
  "name": "{{request.body.name}}",
  "email": "{{request.body.email}}",
  "age": "{{request.body.age}}",
  "updated": true,
  "timestamp": "2024-01-01T10:00:00Z"
}`
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copiado para a área de transferência!');
  };

  return (
    <div className="beeceptor-setup">
      <div className="setup-header">
        <h3>🚀 Configuração do Beeceptor</h3>
        <button 
          onClick={() => setShowSetup(!showSetup)}
          className="toggle-setup"
        >
          {showSetup ? '🔽 Ocultar' : '▶️ Mostrar'} Configurações
        </button>
      </div>

      {showSetup && (
        <div className="setup-content">
          <div className="setup-intro">
            <p><strong>1. Acesse:</strong> <a href="https://beeceptor.com/console/dev-web-test" target="_blank" rel="noopener noreferrer">
              https://beeceptor.com/console/dev-web-test
            </a></p>
            <p><strong>2. Configure as regras abaixo (uma por vez):</strong></p>
          </div>

          <div className="rules-container">
            {rules.map((rule, index) => (
              <div key={index} className="rule-card">
                <div className="rule-header">
                  <h4>{rule.title}</h4>
                  <span className={`method-badge ${rule.method.toLowerCase()}`}>
                    {rule.method}
                  </span>
                </div>
                
                <div className="rule-config">
                  <div className="config-row">
                    <strong>Method:</strong> <code>{rule.method}</code>
                  </div>
                  <div className="config-row">
                    <strong>Path:</strong> <code>{rule.path}</code>
                  </div>
                  <div className="config-row">
                    <strong>Response Body:</strong>
                    <button 
                      onClick={() => copyToClipboard(rule.response)}
                      className="copy-btn"
                    >
                      📋 Copiar
                    </button>
                  </div>
                  <pre className="response-code">
                    {rule.response}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          <div className="setup-footer">
            <div className="important-note">
              <strong>⚠️ Importante:</strong> Configure as regras acima no Beeceptor para que os métodos GET, POST e PUT funcionem corretamente!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeeceptorSetup;
