# 🌟 Guia Completo de Personalização — Nosso Pequeno Universo

Parabéns pela iniciativa de criar este presente! Este projeto foi projetado com uma arquitetura desacoplada: **todo o conteúdo pessoal fica centralizado em um único arquivo**, para que você possa substituir dados demonstrativos por suas histórias reais de maneira simples e rápida.

---

## 📁 1. Onde Fica Cada Coisa no Projeto

```text
nosso-pequeno-universo/
├── index.html                    ← Página principal
├── GUIA_DE_PERSONALIZACAO.md      ← Este guia que você está lendo
├── js/
│   ├── config.js                 ← ⭐ ONDE VOCÊ EDITA TODOS OS TEXTOS E DADOS!
│   ├── audio.js                  ← Sistema de áudio e caixinha de música
│   ├── state.js                  ← Progresso salvo automaticamente
│   ├── router.js                 ← Navegação suave entre experiências
│   ├── mascot.js                 ← Companheiro virtual
│   └── experiences/              ← Código das 18 experiências interativas
├── css/                          ← Estilos visuais, fontes e temas
└── assets/
    ├── images/                   ← Onde você coloca as FOTOS do casal
    └── audio/                    ← Onde você coloca os ÁUDIOS com sua voz
```

---

## ✏️ 2. Como Personalizar as Informações do Casal

Abra o arquivo [`js/config.js`](file:///C:/Users/Anderson/.gemini/antigravity-ide/scratch/nosso-pequeno-universo/js/config.js) em qualquer editor de texto ou no Bloco de Notas.

### A. Nomes e Data de Início do Relacionamento
No início do arquivo, na seção `meta`:
```javascript
meta: {
  siteTitle: "Nosso Pequeno Universo",
  coupleName: "Anderson & Nome Dela", // Nomes que aparecem no topo
  girlfriendName: "Meu Amor",         // Como você a chama carinhosamente
  boyfriendName: "Anderson",
  relationshipStartDate: "2024-06-12", // Data no formato AAAA-MM-DD para contar os dias juntos
  welcomeQuote: "Eu poderia te dar muitas coisas, mas quis criar um lugar onde um pouquinho da nossa história pudesse morar.",
  welcomeSubtext: "Cada estrela, carta e memória aqui foi pensada com carinho."
}
```

---

## 📸 3. Como Adicionar as Fotos Reais de Vocês

1. Pegue as fotos que você quer usar e salve-as na pasta:
   `assets/images/`
2. Dê nomes simples aos arquivos, por exemplo:
   - `foto-primeiro-encontro.jpg`
   - `foto-viagem.jpg`
   - `foto-nosso-abraco.jpg`
3. No arquivo [`js/config.js`](file:///C:/Users/Anderson/.gemini/antigravity-ide/scratch/nosso-pequeno-universo/js/config.js), procure a experiência correspondente e altere o caminho:
   ```javascript
   // Exemplo no Mapa de Memórias:
   photos: [
     { url: "assets/images/foto-primeiro-encontro.jpg", caption: "Aquele café inesquecível" }
   ]
   ```
> **Dica:** Você também pode colar links diretos de imagens hospedadas na internet se preferir (ex: `https://meusite.com/foto.jpg`).

---

## 🎙️ 4. Como Adicionar Áudios Gravados Com a Sua Voz

O site tem uma **Jukebox Afetiva (Experiência 06)** pronta para tocar arquivos de áudio:

1. Grave mensagens pelo gravador de voz do celular (áudios curtos de 30 a 90 segundos com declarações, lembranças ou carinho).
2. Salve os arquivos em formato `.mp3` dentro da pasta:
   `assets/audio/`
3. Nomeie os arquivos conforme configurado em `js/config.js`:
   - `mensagem-1.mp3`
   - `mensagem-2.mp3`
   - `mensagem-3.mp3`
4. **Sem áudios ainda? Não tem problema!** Se o arquivo não for encontrado, o site reproduz automaticamente uma melodia suave de caixinha de música criada em tempo real pelo navegador, sem falhas ou erros.

---

## 💌 5. Como Personalizar as Experiências Mais Especiais

Todas essas seções estão organizadas e comentadas dentro de [`js/config.js`](file:///C:/Users/Anderson/.gemini/antigravity-ide/scratch/nosso-pequeno-universo/js/config.js):

- **Experiência 01 — Mapa de Memórias (`mapMemories`):** Altere os títulos, histórias, datas e as coordenadas `{ x: 20, y: 40 }` no mapa ilustrado.
- **Experiência 02 — Livro de Receitas (`recipeBook`):** Troque os ingredientes poéticos e o modo de preparo das receitas da vida a dois.
- **Experiência 03 — Cartas "Abra Quando..." (`letters`):** Escreva suas cartas sinceras para quando ela tiver saudade, dia difícil ou quiser rir.
- **Experiência 05 — Caça ao Tesouro (`treasureHunt`):** Mude as perguntas, dicas e as palavras aceitas como resposta sobre a história de vocês.
- **Experiência 07 — Mapa Astral (`astralChart`):** Crie brincadeiras personalizadas sobre os signos fictícios do casal e as porcentagens de compatibilidade.
- **Experiência 11 — Roleta dos Encontros (`dateRoulette`):** Cadastre os programas que você quer fazer com ela e as suas promessas de namorado.
- **Experiência 12 — Arquivo de Coisas que Amo (`loveArchive`):** Liste as manias fofas dela, momentos em que você se sentiu amado e detalhes que só você repara.
- **Experiência 16 — O Canto Que Só Existe Para Ela (`secretSanctuary`):** A carta mais íntima e pessoal do presente, protegida por uma palavra secreta.
- **Experiência 17 — Contrato de Aventuras (`contract`):** As cláusulas bem-humoradas com espaço para ela assinar desenhando com o dedo na tela.

---

## 🚀 6. Como Publicar Gratuitamente Para Ela Acessar no Celular

Este projeto foi construído em tecnologia web pura (HTML5, Vanilla CSS e Vanilla JS), **sem precisar de Node, NPM ou servidores complexos**. Ele pode ser hospedado de graça em qualquer plataforma estática em menos de 3 minutos!

### Opção A: Vercel (Recomendado — Leva 2 minutos)
1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Conecte com o seu GitHub ou arraste a pasta `nosso-pequeno-universo` diretamente para o painel de importação.
3. Clique em **Deploy**.
4. Você receberá um link HTTPS limpo (ex: `https://nosso-pequeno-universo.vercel.app`) para enviar no WhatsApp dela!

### Opção B: Netlify Drop (Ainda mais simples — Sem criar repositório)
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arraste a pasta inteira `nosso-pequeno-universo` para dentro da tela do navegador.
3. O site é publicado instantaneamente com um link que você pode personalizar.

### Opção C: GitHub Pages
1. Crie um repositório no GitHub com os arquivos deste projeto.
2. Acesse **Settings** > **Pages** e selecione a branch `main`.
3. Em 1 minuto o site estará no ar no seu link do GitHub Pages.

---

## 📱 7. Como Ela Deve Usar no Celular (iPhone / Android)

- Quando ela abrir o link no **Safari (iPhone)** ou **Chrome (Android)**, o site funcionará perfeitamente em tela cheia com toque e transições suaves.
- Ela pode tocar no botão de compartilhar do Safari e escolher **"Adicionar à Tela de Início"**. O presente ganhará um ícone de estrela e abrirá como se fosse um aplicativo nativo exclusivo!
