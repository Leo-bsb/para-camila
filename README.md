# 💚 Site "Abra em caso de" — Guia de Personalização

## Estrutura de arquivos

```
/
├── index.html        ← página principal
├── css/
│   └── style.css     ← estilos (cores, fontes, layout)
├── js/
│   └── main.js       ← contador de dias, contagem regressiva, animações
└── images/           ← coloque as fotos aqui
    ├── foto1.jpg
    ├── foto2.jpg
    └── ...
```

---

## ✏️ O que editar — passo a passo

### 1. Data do namoro (contador de dias)
Abra `js/main.js`, linha 3:
```js
const START_DATE = new Date(2024, 0, 1);
//                                ↑  ↑
//                           mês-1  dia (janeiro = 0)
```

### 2. Próximo encontro (contagem regressiva)
Mesma linha 6 do `js/main.js`:
```js
const NEXT_MEETING = new Date(2025, 6, 20, 18, 0);
//                              ano  mês-1 dia hora min
```

### 3. Mensagens nos cards
No `index.html`, procure comentários `<!-- 🔧 EDITE: ... -->`.
Cada modal tem um bloco `<div class="modal-content">` — substitua o texto dentro dos `<p>` pelas suas mensagens.

### 4. Adicionar fotos

1. Coloque as fotos na pasta `images/` (JPG, PNG ou WebP)
2. No `index.html`, procure a seção `<!-- SEÇÃO: FOTOS -->`
3. Para cada foto, **substitua** o bloco placeholder:

```html
<!-- ANTES (placeholder) -->
<div class="photo-item reveal" onclick="openLightbox('')">
  <div class="photo-placeholder">...</div>
</div>

<!-- DEPOIS (com foto real) -->
<div class="photo-item reveal" onclick="openLightbox('images/foto1.jpg')">
  <img src="images/foto1.jpg" alt="descrição da foto" />
</div>
```

### 5. Playlist do Spotify
1. Abra sua playlist no Spotify
2. Clique em "..." → Compartilhar → Copiar link de incorporação
3. No `index.html`, seção `<!-- SEÇÃO: PLAYLIST -->`, substitua o `src=` do iframe pelo link copiado

### 6. Botão "Me liga" (WhatsApp)
No `index.html`, próximo ao final, procure:
```html
<a href="https://wa.me/5500000000000?...
```
Substitua `5500000000000` pelo seu número completo com código do país e DDD, sem espaços nem símbolos:
- Brasil: `55` + DDD + número — ex: `5511999999999`

### 7. Linha do tempo
Procure `<!-- SEÇÃO: LINHA DO TEMPO -->` e preencha as datas e textos reais de vocês.

### 8. "Te amo porque"
Procure `<!-- SEÇÃO: TE AMO PORQUE -->` e substitua os textos pelos motivos reais e específicos.

---

## 🚀 Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `para-voce`)
2. Faça upload de **todos os arquivos** (index.html, css/, js/, images/)
3. Vá em **Settings** → **Pages**
4. Em "Source", selecione `main` branch e pasta `/root`
5. Clique em **Save**
6. Aguarde 1-2 minutos — o site estará em: `https://seu-usuario.github.io/para-voce/`

**Dica:** Para atualizar fotos ou textos depois, basta subir o arquivo alterado no GitHub que o site atualiza automaticamente.

---

## 🎨 Cores (para ajustar se quiser)
Em `css/style.css`, linha 6:
```css
--teal:       #a8d8d0;   ← verde água principal
--teal-deep:  #6dbfb3;   ← verde água escuro
--pink:       #f7c5c5;   ← rosa claro principal
--pink-deep:  #e89090;   ← rosa mais escuro
```
