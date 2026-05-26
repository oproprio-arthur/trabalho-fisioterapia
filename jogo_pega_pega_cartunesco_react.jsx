export default function CartoonTagGame() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-900 text-white p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-cyan-300 mb-4">
          Pega-Pega Cartunesco 🎮
        </h1>

        <p className="text-lg text-gray-200 mb-8">
          Protótipo de jogo inspirado em pega-pega com movimentação 3D,
          habilidades exageradas e itens especiais.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-3xl p-6 shadow-2xl border border-cyan-400">
            <h2 className="text-3xl font-semibold text-cyan-300 mb-4">
              🎯 Objetivo
            </h2>

            <p className="text-gray-200 leading-relaxed">
              Um jogador é o caçador e precisa encostar nos outros
              personagens antes do tempo acabar. Os corredores devem usar o
              cenário e os itens para escapar.
            </p>
          </div>

          <div className="bg-white/10 rounded-3xl p-6 shadow-2xl border border-pink-400">
            <h2 className="text-3xl font-semibold text-pink-300 mb-4">
              🕹️ Controles
            </h2>

            <ul className="space-y-3 text-gray-200">
              <li>WASD → movimentação 3D</li>
              <li>Espaço → salto exagerado</li>
              <li>CTRL → agachar/deslizar</li>
              <li>E → usar item</li>
              <li>SHIFT → corrida rápida</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white/10 rounded-3xl p-6 shadow-2xl border border-yellow-400">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">
            🚀 Melhorias Aplicadas
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-black/20 rounded-2xl p-4">
              <h3 className="text-2xl font-bold mb-2">⚡ Velocidades</h3>
              <p className="text-gray-200">
                O caçador corre mais rápido por alguns segundos após errar um
                ataque. Corredores possuem dash e pulos duplos.
              </p>
            </div>

            <div className="bg-black/20 rounded-2xl p-4">
              <h3 className="text-2xl font-bold mb-2">🎨 Física Cartoon</h3>
              <p className="text-gray-200">
                Saltos altos, aceleração rápida, deslizamentos exagerados e
                animações elásticas inspiradas em desenhos animados.
              </p>
            </div>

            <div className="bg-black/20 rounded-2xl p-4">
              <h3 className="text-2xl font-bold mb-2">🧪 Itens</h3>
              <p className="text-gray-200">
                Turbo, mola, bomba de tinta, invisibilidade e armadilhas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-3xl p-6 border border-green-400 shadow-2xl">
            <h2 className="text-3xl font-semibold text-green-300 mb-4">
              🧩 Estrutura do Cenário
            </h2>

            <ul className="space-y-2 text-gray-200">
              <li>✔ Plataformas para escalada</li>
              <li>✔ Túneis para rastejar</li>
              <li>✔ Paredes para wall jump</li>
              <li>✔ Rampas de impulso</li>
              <li>✔ Áreas secretas</li>
              <li>✔ Obstáculos móveis</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-3xl p-6 border border-red-400 shadow-2xl">
            <h2 className="text-3xl font-semibold text-red-300 mb-4">
              👾 Personagens
            </h2>

            <div className="space-y-4 text-gray-200">
              <div>
                <h3 className="font-bold text-xl">Caçador</h3>
                <p>
                  Maior velocidade temporária e ataque em área.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">Corredor</h3>
                <p>
                  Dash rápido, salto duplo e invisibilidade curta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-cyan-500/20 border border-cyan-300 rounded-3xl p-6">
          <h2 className="text-3xl font-bold text-cyan-200 mb-4">
            💡 Loop Principal do Jogo
          </h2>

          <ol className="space-y-3 text-gray-100 list-decimal pl-6">
            <li>Jogadores entram na arena.</li>
            <li>Um jogador vira o caçador.</li>
            <li>Itens aparecem aleatoriamente.</li>
            <li>Corredores usam parkour para fugir.</li>
            <li>O caçador tenta encostar nos adversários.</li>
            <li>Quem sobreviver até o final vence.</li>
          </ol>
        </div>

        <div className="mt-10 bg-black/30 rounded-3xl p-6 border border-white/20">
          <h2 className="text-3xl font-bold mb-4 text-white">
            🧠 Pseudocódigo do Sistema
          </h2>

          <pre className="bg-black rounded-2xl p-4 overflow-auto text-green-300 text-sm">
{`if (player.isHunter) {
  speed = normalSpeed + rageBoost
}

if (player.collectItem) {
  activatePower(item)
}

if (jumpButton) {
  applyCartoonJumpPhysics()
}

if (hunterTouchesRunner) {
  runner = eliminated
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
