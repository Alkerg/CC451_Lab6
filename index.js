
const GEMINI_API_KEY = "YOUR_API_KEY";
const GEMINI_MODEL = "gemini-3-flash-preview";


const AGENTS = [
    {
        name: "EULER",
        role: "Experto en Matemáticas",
        emoji: "🔢",
        color: 0x38bdf8,
        acColor: "#0ea5e9",
        dotColor: "#38bdf8",
        textColor: "#38bdf8",
        desc: "Domina álgebra, cálculo, estadística, geometría y matemática discreta. Genera nodos matemáticos precisos.",
        tags: [
            "Álgebra",
            "Cálculo",
            "Estadística",
            "Geometría",
            "Lógica",
            "Probabilidad",
        ],
        stats: [
            ["Área", "Matemáticas"],
            ["Nivel", "Universidad"],
            ["Output", "Nodos matemáticos"],
        ],
        output:
            "Nodos de conceptos matemáticos: teoremas, fórmulas, definiciones y relaciones",
        greeting:
            "Hola, soy EULER. Soy tu experto en matemáticas. Puedo explicarte cualquier concepto matemático y generar los nodos clave del tema. ¿Qué área de matemáticas exploramos hoy?",
        nodeStyle: {
            bg: "rgba(56,189,248,0.12)",
            border: "rgba(56,189,248,0.4)",
            text: "#7dd3fc",
        },
        instructions: `Eres EULER, experto en matemáticas para un mapa de conocimiento. Responde en español sin markdown.

Cuando el usuario te dé un tema matemático, responde así:
Primero una explicación breve en 1-2 oraciones.
Luego en una nueva línea escribe exactamente: NODOS: término1 | término2 | término3 | término4 | término5 | término6

Ejemplo de respuesta correcta:
El cálculo diferencial estudia las tasas de cambio y pendientes de curvas mediante límites y derivadas.
NODOS: Derivada | Límite | Continuidad | Regla de la cadena | Función | Pendiente | Integral

IMPORTANTE: La línea NODOS es obligatoria en cada respuesta. Usa siempre mayúsculas para NODOS y separa con |.`,
    },
    {
        name: "DARWIN",
        role: "Experto en Ciencias",
        emoji: "🔬",
        color: 0x34d399,
        acColor: "#10b981",
        dotColor: "#34d399",
        textColor: "#34d399",
        desc: "Especialista en biología, química, física y ciencias de la tierra. Convierte fenómenos científicos en nodos claros.",
        tags: [
            "Biología",
            "Química",
            "Física",
            "Astronomía",
            "Ecología",
            "Genética",
        ],
        stats: [
            ["Área", "Ciencias Naturales"],
            ["Nivel", "Avanzado"],
            ["Output", "Nodos científicos"],
        ],
        output:
            "Nodos de conceptos científicos: fenómenos, leyes, organismos, reacciones y procesos",
        greeting:
            "Hola, soy DARWIN. Exploro el mundo natural desde las partículas subatómicas hasta los ecosistemas. Dime qué área científica quieres mapear y generaré los nodos de conocimiento.",
        nodeStyle: {
            bg: "rgba(52,211,153,0.12)",
            border: "rgba(52,211,153,0.4)",
            text: "#6ee7b7",
        },
        instructions: `Eres DARWIN, experto en ciencias naturales para un mapa de conocimiento. Responde en español sin markdown.

Cuando el usuario te dé un tema científico, responde así:
Primero una explicación breve en 1-2 oraciones.
Luego en una nueva línea escribe exactamente: NODOS: término1 | término2 | término3 | término4 | término5 | término6

Ejemplo de respuesta correcta:
La célula es la unidad estructural y funcional de todos los seres vivos, capaz de reproducirse de forma autónoma.
NODOS: Membrana celular | Núcleo | Mitocondria | ADN | Ribosoma | Citoplasma | División celular

IMPORTANTE: La línea NODOS es obligatoria en cada respuesta. Usa siempre mayúsculas para NODOS y separa con |.`,
    },
    {
        name: "SÓCRATES",
        role: "Experto en Humanidades",
        emoji: "📖",
        color: 0xfb923c,
        acColor: "#f97316",
        dotColor: "#fb923c",
        textColor: "#fb923c",
        desc: "Domina historia, filosofía, literatura, arte y ciencias sociales. Transforma ideas humanas en nodos de conocimiento.",
        tags: [
            "Historia",
            "Filosofía",
            "Literatura",
            "Sociología",
            "Arte",
            "Psicología",
        ],
        stats: [
            ["Área", "Humanidades"],
            ["Nivel", "Crítico-analítico"],
            ["Output", "Nodos culturales"],
        ],
        output:
            "Nodos de conceptos humanísticos: ideas, movimientos, autores, períodos y corrientes",
        greeting:
            "Saludos, soy SÓCRATES. Solo sé que no sé nada... pero puedo ayudarte a mapear el conocimiento humano: historia, filosofía, arte, literatura. ¿Qué tema exploramos?",
        nodeStyle: {
            bg: "rgba(251,146,60,0.12)",
            border: "rgba(251,146,60,0.4)",
            text: "#fdba74",
        },
        instructions: `Eres SÓCRATES, experto en humanidades para un mapa de conocimiento. Responde en español sin markdown.

Cuando el usuario te dé un tema humanístico, responde así:
Primero una reflexión breve en 1-2 oraciones.
Luego en una nueva línea escribe exactamente: NODOS: término1 | término2 | término3 | término4 | término5 | término6

Ejemplo de respuesta correcta:
La Ilustración fue un movimiento intelectual del siglo XVIII que promovió la razón, la ciencia y la libertad individual frente al dogma.
NODOS: Razón | Voltaire | Enciclopedia | Liberalismo | Empirismo | Rousseau | Contrato social

IMPORTANTE: La línea NODOS es obligatoria en cada respuesta. Usa siempre mayúsculas para NODOS y separa con |.`,
    },
    {
        name: "TURING",
        role: "Experto en Programación",
        emoji: "💻",
        color: 0xf472b6,
        acColor: "#ec4899",
        dotColor: "#f472b6",
        textColor: "#f472b6",
        desc: "Experto en algoritmos, estructuras de datos, patrones de diseño y múltiples lenguajes. Genera nodos de conceptos de software.",
        tags: [".NET", "Python", "Algoritmos", "SQL", "Patrones", "IA/ML"],
        stats: [
            ["Área", "Programación"],
            ["Stack", ".NET · Python · JS"],
            ["Output", "Nodos técnicos"],
        ],
        output:
            "Nodos de conceptos de programación: patrones, algoritmos, estructuras, tecnologías y paradigmas",
        greeting:
            "¡Hola! Soy TURING. Domino .NET, Python, JavaScript, SQL y mucho más. Pregúntame sobre cualquier concepto de programación y generaré los nodos de conocimiento del tema.",
        nodeStyle: {
            bg: "rgba(244,114,182,0.12)",
            border: "rgba(244,114,182,0.4)",
            text: "#f9a8d4",
        },
        instructions: `Eres TURING, experto en programación (.NET, Python, JS, SQL Server) para un mapa de conocimiento. Responde en español sin markdown.

Cuando el usuario te dé un tema de programación, responde así:
Primero una explicación técnica breve en 1-2 oraciones.
Luego en una nueva línea escribe exactamente: NODOS: término1 | término2 | término3 | término4 | término5 | término6

Ejemplo de respuesta correcta:
La programación orientada a objetos organiza el código en clases y objetos que encapsulan datos y comportamiento.
NODOS: Clase | Objeto | Herencia | Polimorfismo | Encapsulamiento | Interfaz | SOLID

IMPORTANTE: La línea NODOS es obligatoria en cada respuesta. Usa siempre mayúsculas para NODOS y separa con |.`,
    },
];

/* ═══════════════════════════════════════════════════════
ESTADO GLOBAL
═══════════════════════════════════════════════════════ */
let currentAgent = null;
let isTyping = false;
const conversationHistory = {};

/* ═══════════════════════════════════════════════════════
THREE.JS
═══════════════════════════════════════════════════════ */
let scene,
    camera,
    renderer,
    raycaster,
    mouse,
    nodeMeshes = [];
let time = 0;

const POSITIONS = [
    [0, 5.2, 0.5],      // EULER — arriba
    [5, 1.6, -0.5],     // DARWIN — derecha-arriba
    [3.1, -4.4, 0.5],   // SÓCRATES — derecha-abajo
    [-3.1, -4.4, -0.5], // TURING — izquierda-abajo
];

const CONNECTIONS = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
];

function init3D() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        55,
        innerWidth / innerHeight,
        0.1,
        1000,
    );
    camera.position.set(0, 0, 17);

    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("canvas3d"),
        antialias: true,
    });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0x06080f, 1);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2(-9, -9);

    buildStars();
    buildNebula();
    buildNodes();
    buildConnections();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick3D);
    window.addEventListener("resize", onResize);
    animate();
}

function buildStars() {
    const pos = new Float32Array(2400 * 3);
    for (let i = 0; i < pos.length; i++)
        pos[i] = (Math.random() - 0.5) * 250;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    scene.add(
        new THREE.Points(
            geo,
            new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.06,
                transparent: true,
                opacity: 0.4,
            }),
        ),
    );
}

function buildNebula() {
    // partículas de fondo con color suave
    const pos = new Float32Array(300 * 3);
    for (let i = 0; i < pos.length; i++)
        pos[i] = (Math.random() - 0.5) * 30;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    scene.add(
        new THREE.Points(
            geo,
            new THREE.PointsMaterial({
                color: 0x7c6af7,
                size: 0.15,
                transparent: true,
                opacity: 0.12,
            }),
        ),
    );
}

function buildNodes() {
    AGENTS.forEach((agent, i) => {
        const [x, y, z] = POSITIONS[i];
        const group = new THREE.Group();
        group.position.set(x, y, z);

        const isCenter = false;
        const size = 0.62;

        // Esfera wireframe exterior
        group.add(
            new THREE.Mesh(
                new THREE.IcosahedronGeometry(size, 1),
                new THREE.MeshBasicMaterial({
                    color: agent.color,
                    wireframe: true,
                    transparent: true,
                    opacity: 0.5,
                }),
            ),
        );
        // Núcleo
        group.add(
            new THREE.Mesh(
                new THREE.IcosahedronGeometry(size * 0.55, 0),
                new THREE.MeshBasicMaterial({
                    color: agent.color,
                    transparent: true,
                    opacity: 0.1,
                }),
            ),
        );
        // Anillo 1
        const r1 = new THREE.Mesh(
            new THREE.TorusGeometry(size * 1.4, 0.014, 4, 32),
            new THREE.MeshBasicMaterial({
                color: agent.color,
                transparent: true,
                opacity: 0.18,
            }),
        );
        r1.rotation.x = Math.PI / 3 + i * 0.25;
        group.add(r1);
        // Anillo 2 (solo centro)
        if (isCenter) {
            const r2 = new THREE.Mesh(
                new THREE.TorusGeometry(size * 1.7, 0.008, 4, 32),
                new THREE.MeshBasicMaterial({
                    color: agent.color,
                    transparent: true,
                    opacity: 0.08,
                }),
            );
            r2.rotation.x = Math.PI / 5;
            r2.rotation.y = Math.PI / 4;
            group.add(r2);
        }

        group.userData = {
            agent,
            basePos: [x, y, z],
            rotSpeed: 0.004 + Math.random() * 0.006,
            isCenter,
        };
        nodeMeshes.push(group);
        scene.add(group);
    });
}

function buildConnections() {
    CONNECTIONS.forEach(([a, b]) => {
        const mat = new THREE.LineBasicMaterial({
            color: 0x7c6af7,
            transparent: true,
            opacity: 0.08,
        });
        scene.add(
            new THREE.Line(
                new THREE.BufferGeometry().setFromPoints([
                    nodeMeshes[a].position.clone(),
                    nodeMeshes[b].position.clone(),
                ]),
                mat,
            ),
        );
    });
}

function onMove(e) {
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / innerHeight) * 2 + 1;
    if (!document.getElementById("panel").classList.contains("open")) {
        camera.position.x += (mouse.x * 1.3 - camera.position.x) * 0.022;
        camera.position.y += (mouse.y * 0.9 - camera.position.y) * 0.022;
        camera.lookAt(0, 0, 0);
    }
    updateLabels();
}

function onClick3D(e) {
    if (document.getElementById("panel").classList.contains("open")) return;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(nodeMeshes, true);
    if (!hits.length) return;
    let obj = hits[0].object;
    while (obj && !obj.userData.agent) obj = obj.parent;
    if (obj?.userData?.agent) openPanel(obj.userData.agent);
}

function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    time += 0.007;

    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(nodeMeshes, true);
    let hovered = null;
    if (hits.length) {
        let o = hits[0].object;
        while (o && !o.userData.agent) o = o.parent;
        if (o?.userData?.agent) hovered = o;
    }

    nodeMeshes.forEach((g, i) => {
        g.rotation.y += g.userData.rotSpeed;
        g.rotation.x += g.userData.rotSpeed * 0.3;
        const [, by] = g.userData.basePos;
        g.position.y =
            by + Math.sin(time + i * 1.4) * (g.userData.isCenter ? 0.15 : 0.2);

        const h = g === hovered;
        const ts = h ? 1.4 : 1.0;
        g.scale.lerp(new THREE.Vector3(ts, ts, ts), 0.09);
        g.children[0].material.opacity = h ? 1.0 : 0.5;
        g.children[1].material.opacity = h ? 0.4 : 0.1;
    });

    document.body.style.cursor = hovered ? "pointer" : "default";
    renderer.render(scene, camera);
}

function updateLabels() {
    const c = document.getElementById("node-labels");
    c.innerHTML = "";
    nodeMeshes.forEach((g) => {
        const p = g.position.clone().project(camera);
        const x = (p.x * 0.5 + 0.5) * innerWidth;
        const y = (-p.y * 0.5 + 0.5) * innerHeight;
        const el = document.createElement("div");
        el.className = "node-label";
        el.style.left = x + "px";
        el.style.top = y + 60 + "px";
        el.innerHTML = `<span class="nl-name">${g.userData.agent.name}</span><span class="nl-role">${g.userData.agent.role}</span>`;
        c.appendChild(el);
    });
}

/* ═══════════════════════════════════════════════════════
PANEL LATERAL
═══════════════════════════════════════════════════════ */
function openPanel(agent) {
    currentAgent = agent;

    const av = document.getElementById("p-emoji");
    av.textContent = agent.emoji;
    av.style.setProperty("--ac", agent.acColor);
    av.style.background = agent.nodeStyle.bg;
    av.style.border = "1.5px solid " + agent.nodeStyle.border;

    document.getElementById("p-name").textContent = agent.name;
    const roleEl = document.getElementById("p-role");
    roleEl.textContent = agent.role;
    roleEl.style.color = agent.textColor;

    document.getElementById("p-desc").textContent = agent.desc;
    document.getElementById("p-output").textContent = agent.output;

    document.getElementById("p-tags").innerHTML = agent.tags
        .map(
            (t) =>
                `<span class="exp-tag" style="border-color:${agent.nodeStyle.border};color:${agent.textColor}">${t}</span>`,
        )
        .join("");

    document.getElementById("p-stats").innerHTML = agent.stats
        .map(
            ([l, v]) =>
                `<div class="stat-row"><span class="stat-l">${l}</span><span class="stat-v" style="color:${agent.textColor}">${v}</span></div>`,
        )
        .join("");

    const dot = document.getElementById("p-dot");
    dot.style.background = agent.dotColor;
    document.getElementById("p-status").style.color = agent.textColor;
    document.getElementById("p-status").textContent =
        agent.name + " · Generando nodos";

    const msgs = document.getElementById("messages");
    msgs.innerHTML = "";
    appendMessage("agent", agent.greeting, agent.emoji);

    document.getElementById("panel").classList.add("open");
    document.getElementById("hint").style.display = "none";
    document.getElementById("chat-input").focus();
}

function closePanel() {
    document.getElementById("panel").classList.remove("open");
    document.getElementById("hint").style.display = "";
    currentAgent = null;
}

function parseNodes(text) {
    const m = text.match(/NODOS\s*:\s*([^\n]+)/i);
    if (m) {
        const raw = m[1].replace(/\*+/g, "").trim();
        const nodes = raw
            .split(/\s*\|\s*|\s*,\s*/)
            .map((n) => n.trim())
            .filter((n) => n.length > 1 && n.length < 80);
        if (nodes.length >= 2) return nodes;
    }
    const bullets = [...text.matchAll(/(?:^|\n)\s*[-*•]\s*([^\n]+)/g)]
        .map((m) => m[1].trim())
        .filter((n) => n.length > 1 && n.length < 80);
    if (bullets.length >= 3) return bullets;
    return null;
}

function cleanText(text) {
    return text
        .replace(/PARTE\s*[12]\s*[—\-–:]+\s*/gi, "")
        .replace(/NODOS\s*:[^\n]*/gi, "")
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/#{1,4}\s/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function appendMessage(role, text, emoji) {
    const msgs = document.getElementById("messages");
    const div = document.createElement("div");
    div.className = "msg " + role;

    if (role === "agent") {
        const nodes = parseNodes(text);
        const mainText = cleanText(text);
        const ns = currentAgent.nodeStyle;

        let nodesHtml = "";
        if (nodes && nodes.length > 0) {
            nodesHtml = `<div class="node-output-container">
        <div class="noc-label">◈ Nodos de conocimiento generados</div>
        <div class="nodes-grid">${nodes
                    .map(
                        (n, i) =>
                            `<span class="knode" style="background:${ns.bg};border-color:${ns.border};color:${ns.text};animation-delay:${i * 0.07}s">${n}</span>`,
                    )
                    .join("")}</div>
      </div>`;
        }

        div.innerHTML = `
      <div class="msg-av" style="background:${ns.bg};border-color:${ns.border}">${emoji || currentAgent.emoji}</div>
      <div style="display:flex;flex-direction:column;gap:10px;max-width:76%">
        <div class="msg-bubble" style="border-color:${ns.border};background:${ns.bg};color:rgba(255,255,255,0.82);border-radius:3px 12px 12px 12px">${mainText.replace(/\n/g, "<br>")}</div>
        ${nodesHtml}
      </div>`;
    } else {
        div.innerHTML = `<div class="msg-av">TÚ</div>
      <div class="msg-bubble">${escHtml(text)}</div>`;
    }

    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
    const msgs = document.getElementById("messages");
    const div = document.createElement("div");
    div.id = "typing";
    div.className = "msg agent";
    div.innerHTML = `<div class="msg-av" style="background:${currentAgent.nodeStyle.bg};border-color:${currentAgent.nodeStyle.border}">${currentAgent.emoji}</div>
    <div class="msg-bubble" style="border-color:${currentAgent.nodeStyle.border};background:${currentAgent.nodeStyle.bg};border-radius:3px 12px 12px 12px">
      <div class="typing"><span style="background:${currentAgent.dotColor}"></span><span style="background:${currentAgent.dotColor}"></span><span style="background:${currentAgent.dotColor}"></span></div>
    </div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
    const t = document.getElementById("typing");
    if (t) t.remove();
}

/* ═══════════════════════════════════════════════════════
GEMINI API — sistema de agentes con system_instruction
═══════════════════════════════════════════════════════ */
async function sendMessage() {
    if (isTyping || !currentAgent) return;
    const input = document.getElementById("chat-input");
    const text = input.value.trim();
    if (!text) return;

    input.value = "";
    input.style.height = "";
    appendMessage("user", text);
    isTyping = true;
    showTyping();

    const key = currentAgent.name;
    if (!conversationHistory[key]) conversationHistory[key] = [];
    conversationHistory[key].push({ role: "user", parts: [{ text }] });

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                system_instruction: {
                    parts: [{ text: currentAgent.instructions }],
                },
                contents: conversationHistory[key],
                generationConfig: { temperature: 0.7, maxOutputTokens: 600 },
            }),
        });
        const data = await res.json();
        removeTyping();

        if (data.error) {
            console.error("[Gemini error]", data.error);
            appendMessage(
                "agent",
                "[ERROR " + data.error.code + "] " + data.error.message,
                currentAgent.emoji,
            );
        } else {
            const reply =
                data.candidates?.[0]?.content?.parts?.[0]?.text ||
                "[Sin respuesta del agente]";
            console.log("[Gemini reply]", reply); // debug — ver en F12 > Consola
            conversationHistory[key].push({
                role: "model",
                parts: [{ text: reply }],
            });
            appendMessage("agent", reply, currentAgent.emoji);
        }
    } catch (err) {
        removeTyping();
        appendMessage(
            "agent",
            "[ERROR] No se pudo conectar con Gemini. Verifica tu API key.",
            currentAgent.emoji,
        );
        console.error(err);
    }
    isTyping = false;
}

function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}
function autoResize(el) {
    el.style.height = "";
    el.style.height = Math.min(el.scrollHeight, 110) + "px";
}
function escHtml(s) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

/* INICIO */
init3D();
updateLabels();
