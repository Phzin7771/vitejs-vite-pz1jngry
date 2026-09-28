import { useEffect, useState } from 'react'

const MORE_JOKES = ['Hoje eu procurei o carro no estacionamento por tanto tempo que comecei a suspeitar que ele tinha pedido demissão. 🚗😂', 'Você sabe que a vida adulta venceu quando acha o carro, mas não lembra onde deixou a chave. 🔑😂', 'Entrei no estacionamento confiante. Saí conhecendo três carros que não eram meus. 🚗😂', 'Carro estacionado é igual meia na máquina de lavar: some justamente quando você mais precisa. 😂', 'Quando alguém fala “é urgente”, o jeans imediatamente sente uma pressão que nem a centrífuga explica. 👖😂', 'Lavar urgente é o esporte oficial de quem lembrou da peça cinco minutos antes da entrega. 🏃😂', 'O jeans não atrasou. Ele só está fazendo um tratamento de spa com prazo de ontem. 👖😂', '“Só falta lavar” é uma frase capaz de transformar uma tarde tranquila em campeonato mundial de corrida. 😂', 'Quando a OP é urgente, até a máquina parece olhar para você e perguntar: “tem certeza disso?”. 😂', 'Jeans molhado às pressas tem mais compromisso que muita gente na segunda-feira. 👖😂', 'Eu não perdi o carro. O estacionamento que ficou grande demais. 🚗😂', 'Lavagem urgente: porque aparentemente o relógio decidiu entrar na produção também. ⏱️👖😂', 'Quando dizem “precisa ficar pronto hoje”, minha alma já abre uma aba nova no navegador. 😂', 'O jeans ouviu “urgente” e já começou a suar antes da lavagem. 👖💦😂', 'Quem nunca procurou o carro no estacionamento segurando a chave como se ela tivesse GPS? 😂', 'Peça urgente é aquela que chega com prazo, pressão e uma história que começa com “então…”. 😂', 'Não existe peça sem pressa. Existe peça que ainda não recebeu a notícia de que está com pressa. 😂', 'Eu ia sair cedo. Aí o jeans resolveu ter personalidade. 👖😂', 'Quando o acabamento fica perfeito de primeira, ninguém fala nada. Todo mundo fica esperando a pegadinha. 😂', 'Hoje o objetivo é simples: não perder a chave, não perder o carro e não perder a paciência. 😂', 'Jeans: 1. Urgência: 0. Prazo: 0. Café: tentando salvar o campeonato. ☕👖😂', '“Rapidinho” é a unidade oficial de tempo que não existe no calendário. 😂', 'Eu não estou cansado. Estou com 3% de bateria e sem carregador emocional. 🔋😂', 'Fui pegar uma coisa e esqueci o que era. Voltei com um copo d’água e uma crise existencial. 😂', 'Abri a geladeira para pensar. A geladeira também não tinha a resposta. 😂', 'Hoje eu queria ser adulto responsável, mas lembrei que tem sobremesa. 🍰😂', 'Minha memória é excelente. Só não sei onde deixei as coisas que ela deveria lembrar. 😂', 'Eu não tenho desorganização. Tenho um sistema de localização baseado em fé. 😂', 'Quando o celular está na mão e você procura o celular: oficialmente, o dia venceu. 📱😂', 'Fui dormir cedo para descansar. Meu cérebro marcou reunião às 02:17. 😂', 'Quando o boleto chega, até a planta da sala parece ter opinião sobre minhas finanças. 😂', 'Eu queria economizar, mas a comida estava em promoção e eu sou um cidadão vulnerável. 😂', 'Minha dieta começa amanhã. O amanhã já está preocupado. 😂', 'Hoje eu estou tão produtivo que até procrastinei com organização. 😂', '“Não vou comprar nada” dura exatamente até aparecer uma promoção. 😂', 'Quem inventou a segunda-feira claramente não consultou os usuários. 😂', 'Eu acordo antes do despertador só para provar que consigo acordar antes de ser obrigado. 😂', 'Quando você responde “beleza” e depois percebe que acabou de aceitar uma missão impossível. 😂', 'Eu gosto de planejamento. Principalmente do planejamento de ir embora. 😂', 'Meu café não me dá energia. Ele apenas me convence a continuar. ☕😂', 'Hoje eu estou igual impressora: faço barulho, tenho luzes e ninguém sabe por que não funciona. 😂', 'Quando tudo parece sob controle, aparece uma mensagem: “tem um minutinho?”. 😂', 'Eu tenho duas velocidades: correndo e perguntando por que estou correndo. 😂', 'Minha agenda está cheia de coisas que eu mesmo inventei e agora finjo surpresa. 😂', 'Não é atraso. É uma diferença criativa entre o horário combinado e a realidade. 😂', 'Eu queria uma vida tranquila. A vida respondeu: “kkkk”. 😂', 'Hoje eu vim trabalhar com foco. O foco estava de folga. 😂', 'Quando a solução aparece depois de você já ter explicado o problema para cinco pessoas. 😂', 'Eu tenho certeza de onde deixei. Só preciso descobrir onde é esse “onde”. 😂', 'Quando alguém pergunta “tem como fazer hoje?”, o calendário começa a suar. 😂', 'Jeans urgente é praticamente atleta: chega, corre, gira e termina pedindo hidratação. 👖😂', 'Se o jeans pudesse falar, toda peça urgente pediria férias. 😂', '“É só uma lavadinha” é primo distante de “é só uma coisinha”. Ninguém acredita. 😂', 'Quando o jeans sai da máquina perfeito, eu olho para ele como quem olha para um milagre. 👖✨😂', 'Eu não perdi o prazo. O prazo que chegou cedo demais. 😂', 'Quando a peça precisa sair hoje, até o relógio trabalha em hora extra. 😂', 'Jeans com prazo curto é o famoso: “respira fundo e não derruba nada”. 😂', 'Se urgência desse medalha, o setor inteiro já tinha coleção. 🥇😂', 'Hoje o jeans está tão urgente que até a etiqueta está correndo. 😂', 'Quem deixou essa peça para a última hora? Certamente foi o espírito da sexta-feira. 😂', 'Quando o cliente fala “sem pressa”, desconfie: geralmente é o começo da pressa. 😂', 'Lavagem urgente e café forte: dupla oficial do “vai dar certo”. ☕👖😂', 'Eu não tenho pressa. Eu tenho um prazo respirando no meu pescoço. 😂', 'Quando a OP chega urgente, a máquina ganha personalidade e eu ganho olheiras. 😂', 'Hoje o jeans entrou como amostra e saiu como protagonista. 👖😂', 'Se você procurar minha paciência, ela provavelmente está estacionada em outro lugar. 😂', 'Eu fui estacionar e agora estou participando de um reality chamado “Cadê Meu Carro?”. 🚗😂', 'GPS: recalculando. Eu: também. 😂', 'Quando você acha o carro, a sensação é de ter concluído uma expedição internacional. 😂', 'Eu estaciono tão bem que depois preciso de investigação para encontrar. 😂', 'Chave do carro na mão. Carro desaparecido. Caso encerrado? Jamais. 😂', 'Hoje eu queria um botão “desfazer” para decisões tomadas às 07:00. 😂', 'Não sei o que estou fazendo, mas estou fazendo com muita convicção. 😂', 'Eu tenho um plano. O problema é que o plano também não sabe o que fazer. 😂', 'Quando alguém fala “fica tranquilo”, imediatamente deixo de ficar tranquilo. 😂', 'Minha organização é tão avançada que até eu me surpreendo com onde escondi as coisas. 😂', 'Eu só queria cinco minutos de paz. Ganhei uma notificação. 😂', 'Hoje eu estou no modo: funcionando porque parar dá mais trabalho. 😂', 'Se preguiça fosse profissão, eu estaria procurando emprego deitado. 😂', 'Eu não sou indeciso. Estou apenas analisando todas as possibilidades desde ontem. 😂', 'Quando você abre o armário e esquece o que queria: fashion, mas sem objetivo. 😂', 'Minha memória tem armazenamento seletivo: esquece senha, lembra vergonha de 2014. 😂', 'Eu queria esquecer algumas coisas. Meu cérebro prefere reprises. 😂', 'Hoje eu só queria que tudo funcionasse sem eu precisar perguntar “por quê?”. 😂', 'Quando a internet cai, todo mundo descobre que não sabe mais conversar. 😂', 'Eu tenho coragem para tudo, menos para olhar o extrato bancário. 😂', 'Meu salário entra com educação e sai correndo. 😂', 'Eu fui abrir o aplicativo do banco por curiosidade. Agora estou refletindo sobre minhas escolhas. 😂', 'Quando chega o fim do mês, até moeda de cinco centavos vira patrimônio. 😂', 'Eu e o despertador temos uma relação tóxica: ele insiste, eu ignoro. 😂', 'Hoje eu acordei cedo. Tecnicamente. Em espírito, ainda estou dormindo. 😂', 'Não preciso de motivação. Preciso que alguém diga “é sexta”. 😂', 'Quando a semana parece longa, lembre: ainda pode ficar mais longa. 😂', 'Eu não estou cansado, só estou fazendo manutenção preventiva. 😂', 'Vida adulta: você compra um negócio para facilitar a vida e passa duas horas configurando. 😂', 'Quando você fala “só vou descansar cinco minutos” e acorda em outro fuso horário. 😂', 'Hoje eu queria férias. O calendário respondeu com um olhar de pena. 😂', 'Eu ia ser organizado hoje, mas precisei reorganizar a vontade de ser organizado. 😂', 'Quando o almoço acaba e você percebe que ainda existe uma tarde inteira. 😂', 'Eu trabalho muito bem sob pressão. Principalmente quando a pressão já está indo embora. 😂', 'Quando tudo dá certo, eu desconfio que esqueci alguma coisa. 😂', '“Não vai demorar” é uma frase que desafia as leis da física. 😂', 'Hoje a meta é simples: chegar no fim do dia com todas as chaves e alguma dignidade. 😂', 'Se eu sumir, provavelmente estou procurando o carro. 🚗😂', 'Eu vim resolver um problema e saí com três novas tarefas. Clássico. 😂', 'Quando a peça está urgente, o café também passa a ser matéria-prima. ☕👖😂', 'Jeans urgente é igual pizza chegando: todo mundo sabe que tem que ser rápido. 😂', 'Quando alguém diz “é para ontem”, eu consulto o calendário por respeito à tradição. 😂', 'Hoje o jeans precisa de lavagem, eu preciso de férias e os dois estão aguardando aprovação. 😂', 'Não existe prazo impossível. Existe prazo que ainda não recebeu café. ☕😂', 'Quando a lavagem é urgente, até o botão da máquina parece ter pressa. 😂', 'Jeans entrando na máquina: “até mais”. Jeans saindo: “sobrevivi”. 😂', 'Eu não corro atrás do prazo. O prazo corre atrás de mim. 😂', 'Quando a urgência chega, o relógio vira inimigo público. 😂', 'Peça urgente tem um talento: aparecer exatamente quando você estava terminando outra coisa. 😂', 'Hoje eu estou igual jeans novo: cheio de processo pela frente e tentando parecer tranquilo. 👖😂', 'Quando perguntam “já ficou pronto?”, eu respondo mentalmente “em algum universo”. 😂', 'Eu gosto de trabalhar com tranquilidade. A urgência gosta de trabalhar comigo. 😂', 'Lavanderia: onde “só mais uma” pode significar uma nova temporada inteira. 😂', 'Quando o processo é simples, alguém aparece para perguntar se dá para fazer urgente. 😂', 'Hoje não perdi a chave. Só coloquei em um lugar que minha memória não conhece. 😂', 'Eu fui procurar o carro e encontrei três conhecidos. O carro, nada. 😂', 'No estacionamento eu sou excelente em reconhecer carros. Só não o meu. 😂', 'Meu senso de direção funciona perfeitamente até eu entrar no estacionamento. 😂', 'Quando o carro finalmente aparece, eu comemoro como se tivesse ganhado uma prova. 🚗🏆😂', 'Eu não esqueci onde estacionei. Estou apenas testando minha capacidade de exploração urbana. 😂', 'Hoje eu tenho duas missões: achar o carro e lembrar por que fui até ele. 😂', 'Quando você chega no carro e percebe que a chave estava no bolso o tempo todo. 😂', 'Não existe problema pequeno depois das 16h. 😂', 'Depois das 16h, qualquer pedido vira “vamos ver amanhã”. 😂', 'Quando faltam dez minutos para ir embora, nasce a demanda mais importante do universo. 😂', 'Eu tenho um relógio. Ele tem uma missão: me lembrar que ainda falta. 😂', 'Hoje eu não estou atrasado. Estou em modo pré-chegada. 😂', 'Quem inventou o botão “enviar” deveria ter colocado “tem certeza?”. 😂', 'Eu reviso mensagens depois de enviar porque aparentemente gosto de adrenalina. 😂', 'Quando a mensagem é “ok”, começo a analisar até a pontuação. 😂', 'Hoje eu estou emocionalmente disponível para um café e indisponível para qualquer problema novo. ☕😂', 'Minha produtividade depende diretamente da distância até o café. 😂', 'Se café fosse combustível, eu já teria autonomia para atravessar o país. ☕😂', 'Eu não preciso de um conselho. Preciso que alguém diga que vai ficar tudo bem e traga comida. 😂', 'Quando a fome chega, qualquer plano estratégico vira cardápio. 😂', 'Eu queria uma rotina saudável, mas ela não combina com minha agenda de comer besteira. 😂', 'Hoje a única coisa que não está atrasada é a vontade de ir embora. 😂', 'Quando a sexta chega, até o mouse trabalha sorrindo. 😂', 'Quinta-feira é sexta-feira fazendo aquecimento. 😂', 'Sexta-feira às 15h: meu corpo está presente, minha alma já bateu o ponto. 😂', 'Segunda-feira: 07:00. Eu: vamos conversar sobre isso. 😂', 'Terça-feira é segunda com maquiagem. 😂', 'Quarta-feira é o meio da ponte e ninguém sabe mais onde está. 😂', 'Quinta-feira é aquele “quase lá” que alimenta a esperança. 😂', 'Sexta-feira é um estado de espírito com horário de saída. 😂', 'Fim do expediente: quando até o computador parece olhar para a porta. 😂']

const DAILY_PHRASES = [
  'Adulto não tem recreio. Tem café, boleto e a esperança de sair no horário. 😂',
  'Eu ia fazer dieta, mas aí o pão olhou para mim com cara de “você nem vai tentar?”. 🥖😂',
  'Minha bateria social está em 2%. Se eu sorrir, é porque entrou na tomada. 🔋😂',
  'Hoje eu acordei disposto. Disposto a descobrir por que eu acordei. 😴',
  'Se dinheiro não traz felicidade, me passa o seu que eu faço um teste científico. 💸😂',
  'A vida adulta é abrir a geladeira três vezes esperando aparecer um salário lá dentro. 😂',
  'Eu não estou atrasado. Estou fazendo uma entrada triunfal com bastante suspense. 😎',
  'Meu plano para hoje: sobreviver até o almoço e depois avaliar as possibilidades. 🍛',
  'Tem dia que a gente precisa de café. Tem dia que o café precisa da gente. ☕😂',
  'Se eu disser “rapidinho”, por favor, não acredite. Nem eu acredito mais. 😂',
  'Acordei com vontade de conquistar o mundo. Depois sentei e passou. 🪑😂',
  'Hoje eu vou economizar. Só preciso descobrir como avisar isso para o cartão. 💳',
  'Não é preguiça. É meu corpo ativando o modo economia de energia. 🔋',
  'Se organização fosse fácil, minha gaveta de cabos já estaria aposentada. 😂',
  'Eu tenho foco, força e fé. E também tenho uma vontade inexplicável de comer alguma coisa. 🍔',
  'A semana começou com segunda-feira. Claramente alguém não revisou o projeto. 😂',
  'Meu despertador toca com uma confiança que eu jamais teria às 06:00. ⏰',
  'Se hoje der tudo errado, pelo menos amanhã a gente já sabe por onde começar. 😂',
  'Eu não procrastino. Eu dou tempo para as ideias amadurecerem. Por horas. 😂',
  'A vida pede equilíbrio. Eu ofereço café de um lado e chocolate do outro. ⚖️',
  'Quem nunca abriu uma mensagem, pensou “respondo depois” e criou um problema histórico? 😂',
  'Hoje eu estou igual Wi-Fi ruim: presente, mas ninguém sabe se vai funcionar. 📶😂',
  'O objetivo é simples: trabalhar, ganhar dinheiro e não gastar tudo pensando “eu mereço”. 😂',
  'Se o problema tem solução, ótimo. Se não tem, vamos tomar um café e fingir que é planejamento. ☕',
  'Minha força de vontade pediu férias. Eu respeitei os direitos trabalhistas dela. 😂',
  'Eu queria ter maturidade emocional, mas aí apareceu uma promoção de comida. 🍟😂',
  'Tem coisa que só funciona depois de desligar e ligar. Inclusive eu. 😂',
  'A pessoa diz “é só uma coisinha” e você já sabe que perdeu a tarde. 😂',
  'Se eu parecer concentrado, não interrompa. Talvez eu finalmente tenha encontrado o botão certo. 😂',
  'Hoje é um ótimo dia para não criar problemas novos. Os antigos já dão trabalho suficiente. 😂',
  'Não preciso de terapia hoje. Preciso de um feriado de quatro dias e uma comida boa. 😂',
  'Meu talento especial é lembrar de uma resposta perfeita três horas depois da conversa. 🧠😂'
,
  '12h acabou. Quem fez fez, quem não fez... segunda a gente descobre. 😂⏰',
  'Deu 12h: o jeans pode esperar, a máquina pode esperar, eu definitivamente não posso porque já estou indo embora. 😂',
  'Quem fez, fez. Quem não fez, não faz mais. A máquina também já entrou em modo almoço. 😂',
  'Chegou quinta-feira e minha cabeça já abriu o arquivo: “continuar segunda”. 😂',
  'Quinta depois do almoço: oficialmente um trailer da sexta-feira. 😂',
  'Sexta-feira 12h: a produtividade pediu licença e foi embora sem avisar. 😂',
  '12h é o único horário em que “acabou” significa acabou mesmo. Até o jeans entende. 👖😂',
  'Se ficou para sexta depois das 12h, tecnicamente já virou assunto de segunda. 😂',
  'Quem deixou a lavagem urgente para 11h58? Um verdadeiro artista do suspense. 👖⏱️😂',
  'Urgente às 11h59: porque aparentemente o relógio também faz parte do processo químico. 😂',
  'O jeans pediu lavagem urgente. Eu pedi para o relógio colaborar. Nenhum dos dois ouviu. 😂',
  'A peça era urgente. O prazo era ontem. O café era de agora. A paz era de 2019. 😂',
  'Quando falam “é só lavar rapidinho”, a centrífuga começa a rir primeiro. 😂',
  'Se a peça chega com “URGENTE” escrito, automaticamente aparecem mais três peças urgentes atrás dela. 😂',
  'O verdadeiro desafio não é lavar o jeans. É explicar que “rapidinho” não é unidade de tempo. 😂',
  'Hoje a prioridade é: 1 café, 2 não perder o carro, 3 fingir que 12h ainda está longe. 😂',
  'Chegou 11h50 e alguém falou “tem uma coisinha”. Essa frase nunca trouxe paz. 😂',
  'Depois das 12h eu não desapareço. Eu apenas mudo para o modo “isso fica para segunda”. 😂',
  'Quinta-feira: corpo trabalhando, mente escolhendo o que vai comer no fim de semana. 😂',
  'Sexta-feira: até o jeans sabe que existe uma vida lá fora. 👖😂',
  'Quem fez fez. Quem não fez agora tem uma reunião marcada com a própria consciência na segunda. 😂',
  'O prazo era curto. A vontade de ir embora era menor ainda. 😂',
  'Se o relógio pudesse falar às 11h59, ele diria: “não inventa moda”. 😂',
  'Lavagem urgente: a modalidade esportiva em que ninguém treinou, mas todo mundo participa. 😂',
  'O jeans entrou urgente, saiu perfeito e ninguém perguntou como. Respeite a magia. 👖✨😂',
  'Quando a peça precisa sair “agora”, até o botão da calça começa a trabalhar em equipe. 😂',
  'Eu não procrastino. Eu aguardo o momento exato em que a urgência transforma a ideia em esporte. 😂',
  '12h: encerramento oficial das grandes decisões. Depois disso, só decisões pequenas e comida. 😂',
  'Sexta 12h: meu expediente termina, mas meu pensamento já está no sofá. 😂',
  'Quinta-feira às 16h: qualquer problema novo será cuidadosamente encaminhado para segunda-feira. 😂',
  'Segunda-feira existe para resolver aquilo que a quinta-feira decidiu não discutir. 😂',
  ...MORE_JOKES
]

const VERSES = [
  ['O Senhor é a minha força e o meu escudo.', 'Salmos 28:7'],
  ['Tudo posso naquele que me fortalece.', 'Filipenses 4:13'],
  ['Entrega o teu caminho ao Senhor; confia nele.', 'Salmos 37:5'],
  ['Sede fortes e corajosos.', 'Josué 1:9'],
  ['Este é o dia que o Senhor fez; alegremo-nos.', 'Salmos 118:24'],
  ['Aquele que é fiel no pouco também é fiel no muito.', 'Lucas 16:10']
]

const MACATUBA = { latitude: -22.49292, longitude: -48.71085 }

const today = new Date()
const dateKey = today.toISOString().slice(0, 10)
const brDate = today.toLocaleDateString('pt-BR')

const seedSamples = [
  {
    id: 'AM-70821', op: '70821', spa: 'SPA 01', produto: 'Bermuda', referencia: 'REF-001', totvs: 'BMD-001', cliente: 'Cliente Demo', tecido: 'Denim', quantidade: 12, peso: 0.42,
    lavagem: 'Stone', dataEntrada: brDate, responsavel: 'Pablo', status: 'Em desenvolvimento', observacoes: 'Amostra inicial para homologação.',
    pesoTotal: 5.04, receitaMeta: { versao: 'V01', status: 'Em desenvolvimento', observacao: '' }, produtosReceita: [], processosEtapas: {}, receita: [], custosExtras: [], obsCusto: '', obsReceita: ''
  }
]

const seedUsers = [
  { id: 'u-admin', nome: 'Pablo', login: 'admin', senha: '1234', funcao: 'Administrador', ativo: true },
  { id: 'u-lider-amostra', nome: 'Líder Amostra', login: 'amostra', senha: '1234', funcao: 'Líder Amostra', ativo: true },
  { id: 'u-lider-lav', nome: 'Líder Lavanderia', login: 'lavanderia', senha: '1234', funcao: 'Líder Lavanderia', ativo: true },
]

const roles = ['Administrador','Auxiliar','Líder Amostra','Líder Lavanderia','Desenvolvedor do Sistema','Consultor','Produção']
const nav = [
  ['dashboard','⌂','Dashboard'],
  ['point','◷','Ponto'],
  ['samples','✎','Amostras'],
  ['recipes','⌘','Receitas'],
  ['products','◈','Produtos'],
  ['manual','◌','Manual'],
  ['processes','⚙','Processos'],
  ['costs','◇','Custos'],
  ['production','▣','Produção'],
  ['consult','⌕','Consultar Amostra'],
  ['reports','▤','Relatórios'],
  ['users','♙','Usuários'],
]

function readLS(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback } catch { return fallback }
}
function saveLS(key, value) { localStorage.setItem(key, JSON.stringify(value)) }
function money(v) { return Number(v || 0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) }
function num(v) { return Number(v || 0) }
function uid(prefix='ID') { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,7)}` }


async function importExcelRecipe(file) {
  const name = file.name.toLowerCase()
  if (name.endsWith('.csv')) {
    const text = await file.text()
    return parseDelimitedRecipe(text)
  }
  if (!name.endsWith('.xlsx')) throw new Error('Use um arquivo .xlsx ou .csv.')
  return parseXlsxRecipe(file)
}
function parseDelimitedRecipe(text) {
  const rows = text.split(/\r?\n/).filter(Boolean).map(line => line.split(/;|,|\t/).map(x => x.trim().replace(/^"|"$/g,'')))
  return rowsToRecipe(rows)
}
async function parseXlsxRecipe(file) {
  const buf = await file.arrayBuffer()
  const files = await unzipXlsx(buf)
  const shared = files['xl/sharedStrings.xml'] ? xmlTextList(files['xl/sharedStrings.xml']) : []
  const sheetPath = Object.keys(files).find(k => /^xl\/worksheets\/sheet1\.xml$/i.test(k)) || Object.keys(files).find(k=>/^xl\/worksheets\/sheet\d+\.xml$/i.test(k))
  if (!sheetPath) throw new Error('Não encontrei uma planilha dentro do arquivo Excel.')
  const xml = new TextDecoder().decode(files[sheetPath])
  const rows=[]
  const rowMatches=[...xml.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)]
  for(const rm of rowMatches){
    const cells=[]
    for(const cm of rm[1].matchAll(/<c([^>]*)>([\s\S]*?)<\/c>/g)){
      const attrs=cm[1], body=cm[2]
      const ref=(attrs.match(/r="([A-Z]+)\d+"/)||[])[1]
      const type=(attrs.match(/t="([^"]+)"/)||[])[1]
      const v=(body.match(/<v>([\s\S]*?)<\/v>/)||[])[1] || ''
      const inline=(body.match(/<t[^>]*>([\s\S]*?)<\/t>/)||[])[1]
      let value=inline!==undefined?decodeXml(inline):v
      if(type==='s') value=shared[Number(v)]||''
      cells.push([colIndex(ref),value])
    }
    const max=Math.max(-1,...cells.map(x=>x[0])); const arr=Array(max+1).fill('')
    cells.forEach(([i,v])=>arr[i]=v); rows.push(arr)
  }
  return rowsToRecipe(rows)
}
async function unzipXlsx(buf){
  const bytes=new Uint8Array(buf), view=new DataView(buf), files={}
  const decoder=new TextDecoder()
  let eocd=-1
  for(let i=bytes.length-22;i>=Math.max(0,bytes.length-66000);i--){ if(view.getUint32(i,true)===0x06054b50){eocd=i;break} }
  if(eocd<0) throw new Error('Arquivo XLSX inválido.')
  const cdSize=view.getUint32(eocd+12,true), cdOffset=view.getUint32(eocd+16,true)
  let p=cdOffset, end=cdOffset+cdSize
  while(p<end){
    if(view.getUint32(p,true)!==0x02014b50) break
    const method=view.getUint16(p+10,true), compSize=view.getUint32(p+20,true), nameLen=view.getUint16(p+28,true), extraLen=view.getUint16(p+30,true), commentLen=view.getUint16(p+32,true), localOffset=view.getUint32(p+42,true)
    const name=decoder.decode(bytes.slice(p+46,p+46+nameLen)); const localNameLen=view.getUint16(localOffset+26,true), localExtraLen=view.getUint16(localOffset+28,true)
    const start=localOffset+30+localNameLen+localExtraLen, raw=bytes.slice(start,start+compSize)
    let data
    if(method===0) data=raw
    else if(method===8){ const ds=new DecompressionStream('deflate-raw'); data=new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(ds)).arrayBuffer()) }
    else throw new Error('Compressão XLSX não suportada neste navegador.')
    files[name]=data; p+=46+nameLen+extraLen+commentLen
  }
  return files
}
function xmlTextList(bytes){
  const xml=new TextDecoder().decode(bytes), out=[]
  for(const m of xml.matchAll(/<si>([\s\S]*?)<\/si>/g)) out.push([...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(x=>decodeXml(x[1])).join(''))
  return out
}
function decodeXml(v){return v.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'")}
function colIndex(s){let n=0;for(const c of (s||'')){n=n*26+c.charCodeAt(0)-64}return n-1}
function rowsToRecipe(rows){
  const nonEmpty=rows.filter(r=>r.some(v=>String(v).trim()!=='')).slice(0,250)
  if(!nonEmpty.length) throw new Error('A planilha está vazia.')
  const norm=v=>String(v??'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim()
  let header=nonEmpty.findIndex(r=>r.some(v=>['processo','produto','percentual','%','tempo','temperatura','°c','relacao de banho','rel. banho','qtde. kg / g'].includes(norm(v))))
  if(header<0) header=0
  const h=nonEmpty[header].map(norm)
  const find=(names)=>{const i=h.findIndex(x=>names.some(n=>x===n||x.includes(n)));return i}
  const ip=find(['processo']), ii=find(['produto']), ipct=find(['percentual','%']), iq=find(['qtde. kg / g','quantidade','kg/g']), it=find(['tempo']), itmp=find(['temperatura','°c']), ib=find(['relacao de banho','rel. banho','banho'])
  const data=nonEmpty.slice(header+1).map(r=>({
    id:uid('IMP'), processo:String(r[ip>=0?ip:0]||'').trim(), produto:String(r[ii>=0?ii:1]||'').trim(), percentual:num(r[ipct>=0?ipct:2]), quantidadeKg:num(r[iq>=0?iq:3]), tempo:String(r[it>=0?it:4]||''), temperatura:String(r[itmp>=0?itmp:5]||''), relacaoBanho:String(r[ib>=0?ib:6]||'')
  })).filter(x=>x.processo||x.produto||x.quantidadeKg)
  if(!data.length) throw new Error('Não encontrei linhas de receita. Use colunas Processo, Produto, %, Quantidade, Tempo, Temperatura e Relação de banho.')
  return {rows:data, sourceRows:nonEmpty.length, headerIndex:header}
}


function openPrintWindow(sample, mode='recipe') {
  const recipe = sample?.receita || []
  const processes = Object.values(sample?.processosEtapas || {}).flatMap(x => [
    ...(x?.antes || []),
    ...(x?.depois || [])
  ])

  const productCost = recipe.reduce(
    (a, r) => a + num(r.quantidadeKg) * num(r.preco),
    0
  )
  const stageCost = processes.reduce(
    (a, p) => a + num(p.totalCost ?? p.custoTotal ?? 0),
    0
  )
  const extras = (sample?.custosExtras || []).reduce(
    (a, x) => a + num(x.valor),
    0
  )
  const total = productCost + stageCost + extras
  const perPiece = num(sample?.quantidade)
    ? total / num(sample.quantidade)
    : 0
  const perKg = num(sample?.pesoTotal)
    ? total / num(sample.pesoTotal)
    : 0

  const moneyP = (v) =>
    `R$ ${num(v).toFixed(2).replace('.', ',')}`

  const safe = (v) =>
    String(v ?? '—')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;')

  const rowsRecipe =
    recipe
      .map(
        (r) => `
          <tr>
            <td>${safe(r.processo)}</td>
            <td>${safe(r.percentual)}%</td>
            <td>${safe(r.produto)}</td>
            <td>${num(r.quantidadeKg).toFixed(3)}</td>
            <td>${safe(r.tempo)}</td>
            <td>${safe(r.temperatura)}</td>
            <td>${safe(r.relacaoBanho)}</td>
          </tr>`
      )
      .join('') ||
    '<tr><td colspan="7" class="empty-row">Nenhum item de receita cadastrado.</td></tr>'

  const rowsProcess =
    processes
      .map(
        (p) => `
          <tr>
            <td>${safe(p.quantidade || 1)}</td>
            <td>${safe(p.nome)}</td>
            <td>${safe(p.modo || '—')}</td>
            <td>${moneyP(p.totalCost ?? p.custoTotal ?? 0)}</td>
          </tr>`
      )
      .join('') ||
    '<tr><td colspan="4" class="empty-row">Nenhum processo cadastrado.</td></tr>'

  const recipeDoc = `
    <header class="doc-header">
      <div class="logo">AMO<span>STRA</span></div>
      <div class="doc-title">
        <strong>FORMULÁRIO DE RECEITA</strong>
        <small>FICHA TÉCNICA DE DESENVOLVIMENTO</small>
      </div>
      <div class="doc-date">${safe(brDate)}</div>
    </header>

    <section class="identity-grid">
      <div><small>CLIENTE</small><strong>${safe(sample.cliente)}</strong></div>
      <div><small>PRODUTO</small><strong>${safe(sample.produto)}</strong></div>
      <div><small>SPA</small><strong>${safe(sample.spa)}</strong></div>
      <div><small>OP</small><strong>${safe(sample.op)}</strong></div>
      <div><small>REFERÊNCIA</small><strong>${safe(sample.referencia)}</strong></div>
      <div><small>TECIDO</small><strong>${safe(sample.tecido)}</strong></div>
      <div><small>LAVAGEM</small><strong>${safe(sample.lavagem)}</strong></div>
      <div><small>QUANTIDADE</small><strong>${safe(sample.quantidade)}</strong></div>
      <div><small>PESO UNITÁRIO</small><strong>${num(sample.peso).toFixed(3)} kg</strong></div>
      <div><small>PESO TOTAL</small><strong>${num(sample.pesoTotal).toFixed(3)} kg</strong></div>
      <div><small>VERSÃO</small><strong>${safe(sample.receitaMeta?.versao || 'V01')}</strong></div>
      <div><small>STATUS</small><strong>${safe(sample.receitaMeta?.status || 'Em desenvolvimento')}</strong></div>
    </section>

    <h2>COMPOSIÇÃO DA RECEITA</h2>
    <table>
      <thead>
        <tr>
          <th>PROCESSO</th>
          <th>%</th>
          <th>PRODUTO</th>
          <th>KG / G</th>
          <th>TEMPO</th>
          <th>°C</th>
          <th>RELAÇÃO DE BANHO</th>
        </tr>
      </thead>
      <tbody>${rowsRecipe}</tbody>
    </table>

    <h2>OBSERVAÇÕES DA RECEITA</h2>
    <div class="notes">${safe(sample.obsReceita || 'Sem observações.')}</div>

    <div class="signature-grid">
      <div>RESPONSÁVEL DESENVOLVIMENTO</div>
      <div>LÍDER</div>
      <div>PRODUÇÃO</div>
    </div>
  `

  const costDoc = `
    <header class="doc-header">
      <div class="logo">AMO<span>STRA</span></div>
      <div class="doc-title">
        <strong>CUSTO DA AMOSTRA</strong>
        <small>MEMÓRIA DE CÁLCULO</small>
      </div>
      <div class="doc-date">${safe(brDate)}</div>
    </header>

    <section class="identity-grid">
      <div><small>CLIENTE</small><strong>${safe(sample.cliente)}</strong></div>
      <div><small>SPA</small><strong>${safe(sample.spa)}</strong></div>
      <div><small>OP</small><strong>${safe(sample.op)}</strong></div>
      <div><small>PRODUTO</small><strong>${safe(sample.produto)}</strong></div>
      <div><small>REFERÊNCIA</small><strong>${safe(sample.referencia)}</strong></div>
      <div><small>TECIDO</small><strong>${safe(sample.tecido)}</strong></div>
      <div><small>PESO UNITÁRIO</small><strong>${num(sample.peso).toFixed(3)} kg</strong></div>
      <div><small>PESO TOTAL</small><strong>${num(sample.pesoTotal).toFixed(3)} kg</strong></div>
    </section>

    <h2>PRODUTOS DA RECEITA</h2>
    <table>
      <thead>
        <tr>
          <th>%</th>
          <th>PRODUTO</th>
          <th>QUANTIDADE</th>
          <th>VALOR UNITÁRIO</th>
          <th>CUSTO</th>
        </tr>
      </thead>
      <tbody>
        ${
          recipe
            .map(
              (r) => `
                <tr>
                  <td>${safe(r.percentual)}%</td>
                  <td>${safe(r.produto)}</td>
                  <td>${num(r.quantidadeKg).toFixed(3)} kg</td>
                  <td>${moneyP(r.preco)}</td>
                  <td>${moneyP(num(r.quantidadeKg) * num(r.preco))}</td>
                </tr>`
            )
            .join('') ||
          '<tr><td colspan="5" class="empty-row">Nenhum produto.</td></tr>'
        }
      </tbody>
    </table>

    <h2>MANUAIS / LAVAGEM / ACABAMENTO / FUNDO</h2>
    <table>
      <thead>
        <tr>
          <th>QTD.</th>
          <th>PROCESSO</th>
          <th>BASE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>${rowsProcess}</tbody>
    </table>

    <section class="total-box">
      <div><span>PRODUTOS DA RECEITA</span><strong>${moneyP(productCost)}</strong></div>
      <div><span>PROCESSOS / MANUAIS</span><strong>${moneyP(stageCost)}</strong></div>
      <div><span>CUSTOS EXTRAS</span><strong>${moneyP(extras)}</strong></div>
      <div class="grand"><span>CUSTO TOTAL</span><strong>${moneyP(total)}</strong></div>
      <div><span>CUSTO / PEÇA</span><strong>${moneyP(perPiece)}</strong></div>
      <div><span>CUSTO / KG</span><strong>${moneyP(perKg)}</strong></div>
    </section>

    <h2>OBSERVAÇÕES DO CUSTO</h2>
    <div class="notes">${safe(sample.obsCusto || 'Sem observações.')}</div>

    <div class="signature-grid">
      <div>DESENVOLVIMENTO</div>
      <div>RESPONSÁVEL CUSTO</div>
      <div>APROVAÇÃO</div>
    </div>
  `

  const doc = mode === 'cost' ? costDoc : recipeDoc
  const title = mode === 'cost'
    ? 'AMOSTRA • Custo da Amostra'
    : 'AMOSTRA • Formulário de Receita'

  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<style>
  @page {
    size: A4 portrait;
    margin: 10mm;
  }

  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #17212b;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body {
    width: 190mm;
    margin: 0 auto;
    padding: 0;
    font-size: 9px;
  }

  .doc-header {
    display: grid;
    grid-template-columns: 1fr 2.4fr 1fr;
    align-items: center;
    gap: 10px;
    border-bottom: 2px solid #18222c;
    padding-bottom: 8px;
    margin-bottom: 10px;
  }

  .logo {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -1px;
    color: #12c9e8;
  }

  .logo span { color: #9c63ff; }

  .doc-title {
    text-align: center;
    display: grid;
    gap: 3px;
  }

  .doc-title strong {
    font-size: 13px;
    letter-spacing: .8px;
  }

  .doc-title small {
    font-size: 7px;
    letter-spacing: 1.5px;
    color: #64727e;
  }

  .doc-date {
    text-align: right;
    font-size: 8px;
    color: #52606c;
  }

  .identity-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid #303b45;
    margin-bottom: 12px;
  }

  .identity-grid > div {
    min-height: 38px;
    padding: 6px 7px;
    border-right: 1px solid #bcc4ca;
    border-bottom: 1px solid #bcc4ca;
  }

  .identity-grid > div:nth-child(4n) { border-right: 0; }

  .identity-grid small {
    display: block;
    color: #6a7781;
    font-size: 6.5px;
    font-weight: 800;
    letter-spacing: .8px;
    margin-bottom: 4px;
  }

  .identity-grid strong {
    display: block;
    font-size: 9px;
    overflow-wrap: anywhere;
  }

  h2 {
    font-size: 9px;
    letter-spacing: 1px;
    margin: 12px 0 5px;
    padding: 5px 7px;
    color: #fff;
    background: #18222c;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    font-size: 8px;
  }

  th, td {
    border: 1px solid #4a535a;
    padding: 4px 5px;
    text-align: left;
    vertical-align: middle;
    overflow-wrap: anywhere;
  }

  th {
    background: #e8edf1;
    color: #202b33;
    font-size: 6.5px;
    letter-spacing: .5px;
  }

  .empty-row {
    text-align: center;
    color: #687680;
    padding: 9px;
  }

  .notes {
    border: 1px solid #4a535a;
    min-height: 42px;
    padding: 7px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  .signature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 45px;
  }

  .signature-grid div {
    border-top: 1px solid #333;
    padding-top: 5px;
    text-align: center;
    font-size: 7px;
  }

  .total-box {
    width: 62%;
    margin: 12px 0 0 auto;
    border: 1px solid #303b45;
  }

  .total-box > div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 5px 7px;
    border-bottom: 1px solid #c2c8cd;
  }

  .total-box > div:last-child { border-bottom: 0; }

  .total-box .grand {
    background: #18222c;
    color: #fff;
    font-size: 11px;
    font-weight: 900;
  }

  .total-box .grand strong {
    color: #25d8f2;
  }

  @media print {
    html, body {
      width: 100%;
      background: #fff !important;
    }

    body {
      margin: 0 auto;
    }
  }
</style>
</head>
<body>${doc}</body>
</html>`

  // Abre uma janela vazia primeiro (mais confiável que abrir e imprimir
  // imediatamente um document.write).
  const w = window.open('', '_blank', 'width=1000,height=850')

  if (!w) {
    alert(
      'O navegador bloqueou a janela de impressão. ' +
      'Permita pop-ups para o AMOSTRA e tente novamente.'
    )
    return
  }

  let printed = false

  const printNow = () => {
    if (printed || w.closed) return
    printed = true
    w.focus()
    setTimeout(() => {
      try {
        w.print()
      } catch {
        // Se o navegador bloquear a chamada automática, o documento
        // continua aberto para o usuário usar Ctrl+P.
      }
    }, 150)
  }

  const closeAfterPrint = () => {
    setTimeout(() => {
      try {
        w.close()
      } catch {}
    }, 300)
  }

  w.addEventListener('afterprint', closeAfterPrint, { once: true })

  w.document.open()
  w.document.write(html)
  w.document.close()

  // Aguarda o navegador terminar layout/paint antes de abrir a prévia.
  if (w.document.readyState === 'complete') {
    setTimeout(printNow, 700)
  } else {
    w.addEventListener('load', () => setTimeout(printNow, 300), { once: true })
  }

  // Fallback para navegadores que não disparam load em about:blank.
  setTimeout(printNow, 1600)
}

function App() {
  const [users,setUsers] = useState(() => readLS('lavtech_users', seedUsers))
  const [currentUser,setCurrentUser] = useState(() => readLS('lavtech_session', null))
  const [samples,setSamples] = useState(() => readLS('lavtech_samples', seedSamples))
  const [products,setProducts] = useState(() => readLS('lavtech_products', []))
  const [manuals,setManuals] = useState(() => readLS('lavtech_manuals', []))
  const [page,setPage] = useState('dashboard')
  const [selectedId,setSelectedId] = useState(null)
  const [toast,setToast] = useState('')
  const [clock,setClock] = useState(new Date())
  const [weather,setWeather] = useState(null)
  const [weatherError,setWeatherError] = useState('')
  const [pointRecords,setPointRecords] = useState(() => readLS('lavtech_ponto', {}))
  const [funPhrase,setFunPhrase] = useState(() => DAILY_PHRASES[new Date().getDate() % DAILY_PHRASES.length])
  const [confetti,setConfetti] = useState(false)
  const [aiPulse,setAiPulse] = useState(false)

  useEffect(()=>saveLS('lavtech_users',users),[users])
  useEffect(()=>saveLS('lavtech_samples',samples),[samples])
  useEffect(()=>saveLS('lavtech_products',products),[products])
  useEffect(()=>saveLS('lavtech_manuals',manuals),[manuals])
  useEffect(()=>saveLS('lavtech_ponto',pointRecords),[pointRecords])
  useEffect(()=>{ if(currentUser) saveLS('lavtech_session',currentUser); else localStorage.removeItem('lavtech_session') },[currentUser])
  useEffect(()=>{ if(toast){ const t=setTimeout(()=>setToast(''),3000); return()=>clearTimeout(t)} },[toast])
  useEffect(()=>{
    const tick=()=>setClock(new Date())
    tick()
    const timer=setInterval(tick,1000)
    return()=>clearInterval(timer)
  },[])
  useEffect(()=>{
    let alive=true
    const loadWeather=async()=>{
      try{
        const url=`https://api.open-meteo.com/v1/forecast?latitude=${MACATUBA.latitude}&longitude=${MACATUBA.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,precipitation&hourly=temperature_2m,precipitation_probability,precipitation,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,sunrise,sunset&timezone=America%2FSao_Paulo&forecast_days=5`
        const r=await fetch(url)
        if(!r.ok) throw new Error('weather')
        const data=await r.json()
        if(alive){setWeather(data);setWeatherError('')}
      }catch{ if(alive) setWeatherError('Clima indisponível no momento.') }
    }
    loadWeather()
    const timer=setInterval(loadWeather,10*60*1000)
    return()=>{alive=false;clearInterval(timer)}
  },[])

  const go = (p) => { setPage(p); setSelectedId(null) }
  const pointKey = `${clock.getFullYear()}-${String(clock.getMonth()+1).padStart(2,'0')}-${String(clock.getDate()).padStart(2,'0')}`
  const registerPoint = (type) => {
    const current = pointRecords[pointKey] || { userId: currentUser.id, nome: currentUser.nome, data: pointKey }
    if(current[type]) { setToast(`O ponto de ${pointLabel(type)} já foi registrado.`); return }
    const updated = { ...current, [type]: clock.toISOString(), lastType: type }
    setPointRecords(prev => ({ ...prev, [pointKey]: updated }))
    setToast(`${pointLabel(type)} registrado às ${clock.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'})}.`)
    setConfetti(true)
    setTimeout(()=>setConfetti(false),1400)
  }
  const editPoint = (record) => {
    setPointRecords(prev => {
      const next = { ...prev }
      const originalKey = record._originalData || record.data
      delete next[originalKey]
      const clean = { ...record, userId: currentUser.id, nome: currentUser.nome, lastType: 'editado' }
      delete clean._originalData
      next[clean.data] = clean
      return next
    })
    setToast(`Ponto de ${new Date(`${record.data}T12:00:00`).toLocaleDateString('pt-BR')} atualizado.`)
  }
  const updateSample = (id, patch) => setSamples(prev=>prev.map(s=>s.id===id?({...s,...patch}):s))
  const selected = samples.find(s=>s.id===selectedId) || null
  const canAdmin = currentUser?.funcao === 'Administrador' || currentUser?.funcao === 'Desenvolvedor do Sistema'

  if(!currentUser) return <Login users={users} onLogin={u=>{setCurrentUser(u);setPage('dashboard')}} />

  return <div className="app-shell"><AmbientEffects /><div className={confetti?'confetti-layer show':'confetti-layer'}>{Array.from({length:28},(_,i)=><i key={i} style={{'--i':i}} />)}</div>
    <Sidebar page={page} go={go} user={currentUser} canAdmin={canAdmin} logout={()=>setCurrentUser(null)} />
    <main className="main-area">
      <Topbar page={page} user={currentUser} clock={clock} funPhrase={funPhrase} />
      <div className="page-content">
        {page==='dashboard' && <Dashboard samples={samples} users={users} go={go} products={products} manuals={manuals} clock={clock} weather={weather} weatherError={weatherError} pointRecords={pointRecords} pointKey={pointKey} registerPoint={registerPoint} funPhrase={funPhrase} setFunPhrase={setFunPhrase} />}
        {page==='point' && <PointPage clock={clock} currentUser={currentUser} records={pointRecords} pointKey={pointKey} registerPoint={registerPoint} editPoint={editPoint} />}
        {page==='samples' && <Samples samples={samples} open={id=>{setSelectedId(id);setPage('sample')}} create={s=>{setSamples(p=>[s,...p]);setSelectedId(s.id);setPage('sample');setToast('Amostra criada com sucesso.')}} />}
        {page==='sample' && selected && <SampleDetail sample={selected} update={patch=>updateSample(selected.id,patch)} back={()=>go('samples')} go={go} toast={setToast} products={products} manuals={manuals} />}
        {page==='recipes' && <RecipeCenter samples={samples} setSamples={setSamples} open={id=>{setSelectedId(id);setPage('sample')}} toast={setToast} />}
        {page==='products' && <Products products={products} setProducts={setProducts} toast={setToast} />}
        {page==='manual' && <ManualPage manuals={manuals} setManuals={setManuals} toast={setToast} />}
        {page==='processes' && <ProcessPage manuals={manuals} />}
        {page==='costs' && <Costs samples={samples} open={id=>{setSelectedId(id);setPage('sample')}} />}
        {page==='production' && <Production samples={samples} />}
        {page==='consult' && <Consult samples={samples} open={id=>{setSelectedId(id);setPage('sample')}} />}
        {page==='reports' && <Reports samples={samples} />}
        {page==='users' && <Users users={users} setUsers={setUsers} />}
      </div>
    </main>
    {toast && <div className="toast">✓ {toast}</div>}
  </div>
}

function Login({users,onLogin}) {
  const [login,setLogin]=useState('admin'), [senha,setSenha]=useState('1234'), [error,setError]=useState('')
  const submit=e=>{e.preventDefault(); const u=users.find(x=>x.login.toLowerCase()===login.toLowerCase()&&x.senha===senha&&x.ativo); if(u) onLogin(u); else setError('Login ou senha inválidos.')}
  return <div className="login-screen"><div className="login-glow"/><form className="login-card" onSubmit={submit}>
    <div className="brand big"><span className="brand-dot"/> AMO<span>STRA</span></div>
    <div className="eyebrow">SISTEMA CORPORATIVO</div><h1>Portal de Operações</h1><p className="muted">Desenvolvimento • Receita • Produção</p>
    <label>Usuário<input value={login} onChange={e=>setLogin(e.target.value)} autoFocus /></label>
    <label>Senha<input type="password" value={senha} onChange={e=>setSenha(e.target.value)} /></label>
    {error && <div className="error-box">{error}</div>}
    <button className="btn primary wide">ENTRAR NO AMOSTRA <span>→</span></button>
    <div className="login-hint">Acesso inicial: <b>admin</b> / <b>1234</b></div>
  </form></div>
}

function Sidebar({page,go,user,canAdmin,logout}) {
  return <aside className="sidebar">
    <div className="brand"><span className="brand-dot"/> AMO<span>STRA</span></div>
    <div className="side-user"><div className="avatar">{user.nome?.[0]||'U'}</div><div><b>{user.nome}</b><small>{user.funcao}</small></div></div>
    <nav>{nav.map(([id,icon,label])=>{
      if(id==='users'&&!canAdmin) return null
      const section = ['samples','recipes','products','manual','processes','costs'].includes(id)?'DESENVOLVIMENTO':id==='production'||id==='consult'||id==='point'?'PRODUÇÃO':id==='reports'?'CONTROLE':id==='users'?'ADMINISTRAÇÃO':null
      const prev = nav[nav.findIndex(x=>x[0]===id)-1]?.[0]
      const needHeader = section && (prev===undefined || !([ 'samples','recipes','products','manual','processes','costs'].includes(prev)&&section==='DESENVOLVIMENTO') && !(['production','consult','point'].includes(prev)&&section==='PRODUÇÃO'))
      return <div key={id}>{needHeader&&<div className="nav-section">{section}</div>}<button className={`nav-item ${page===id|| (id==='sample'&&page==='sample')?'active':''}`} onClick={()=>go(id)}><i>{icon}</i>{label}</button></div>
    })}</nav>
    <div className="side-bottom"><div className="system-live"><span/> Sistema operacional</div><button className="logout" onClick={logout}>↪ Sair</button></div>
  </aside>
}

function Topbar({page,user,clock,funPhrase}) {
 const labels={dashboard:'Dashboard',point:'Controle de Ponto',samples:'Amostras',sample:'Detalhes da Amostra',recipes:'Receitas',products:'Cadastro de Produtos',manual:'Manual',processes:'Processos',costs:'Custos',production:'Produção',consult:'Consultar Amostra',reports:'Relatórios',users:'Gestão de Usuários'}
 const phrase=funPhrase
 const schedule=getTimeAlert(clock)
 return <header className="topbar">
   <div><div className="breadcrumb">AMOSTRA / SISTEMA • MACATUBA / SP</div><h1>{labels[page]||'AMOSTRA'}</h1><p>{phrase}</p></div>
   <div className="top-actions">
     <div className={`clock-badge ${schedule.level}`}><span>⏱ {schedule.label}</span><b>{clock.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'})}</b></div>
     <div className="today"><span>HOJE</span><b>{clock.toLocaleDateString('pt-BR')}</b></div>
     <div className="user-pill"><span className="status-dot"/> {user.nome}</div>
   </div>
 </header>
}

function getTimeAlert(now){
 const day=now.getDay(), minutes=now.getHours()*60+now.getMinutes()
 if(day===0||day===6) return {label:'Fora do expediente',level:'neutral'}
 const friday=day===5, lunchStart=12*60, lunchEnd=13*60, exit=(friday?16:17)*60
 if(minutes<7*60) return {label:'Aguardando entrada',level:'warning'}
 if(minutes>=11*60+50 && minutes<12*60+15) return {label:'Ponto • almoço',level:'alert'}
 if(minutes>=12*60+50 && minutes<13*60+15) return {label:'Ponto • retorno',level:'alert'}
 if(minutes>=exit-10 && minutes<=exit+20) return {label:'Ponto • saída',level:'alert'}
 if(minutes>exit+20) return {label:'Expediente encerrado',level:'neutral'}
 return {label:'Expediente ativo',level:'live'}
}

function Dashboard({samples,users,go,products,manuals,clock,weather,weatherError,pointRecords,pointKey,registerPoint,funPhrase,setFunPhrase}) {
 const total=samples.length, dev=samples.filter(s=>s.status==='Em desenvolvimento').length, approved=samples.filter(s=>s.receitaMeta?.status==='Aprovada').length
 const recipeItems=samples.reduce((a,s)=>a+(s.receita?.length||0),0)
 const totalPieces=samples.reduce((a,s)=>a+num(s.quantidade),0)
 const totalCost=samples.reduce((a,s)=>a+calculateSampleCost(s),0)
 const verse=VERSES[clock.getDate()%VERSES.length]
 const phrase=funPhrase
 const alert=getTimeAlert(clock)
 return <>
  <div className="hero-row dashboard-hero">
   <div><div className="eyebrow">CENTRAL OPERACIONAL • AO VIVO</div><h2>Bom trabalho. Vamos produzir resultado.</h2><p className="muted">Desenvolvimento, receita, custo, produção e controle em um único ambiente.</p></div>
   <div className="hero-actions"><div className={`time-alert ${alert.level}`}><span>●</span><div><b>{alert.label}</b><small>{clock.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})} • controle de ponto</small></div></div><button className="btn ghost glow-btn" onClick={()=>go('point')}>◷ REGISTRAR PONTO</button><button className="btn primary" onClick={()=>go('samples')}>+ NOVA AMOSTRA</button></div>
  </div>
  <div className="metric-grid">
   <Metric icon="✎" title="Amostras" value={total} sub={`${dev} em desenvolvimento`} accent="cyan"/>
   <Metric icon="⌘" title="Receitas aprovadas" value={approved} sub="Liberadas para produção" accent="green"/>
   <Metric icon="◈" title="Peças na base" value={totalPieces} sub={`${recipeItems} itens de receita`} accent="purple"/>
   <Metric icon="◆" title="Custo calculado" value={money(totalCost)} sub="Receitas + processos" accent="orange"/>
  </div>
  <div className="dashboard-neon-actions"><button onClick={()=>go("samples")}><span>✎</span><b>NOVA AMOSTRA</b><small>Desenvolver uma peça</small></button><button onClick={()=>go("recipes")}><span>⌘</span><b>RECEITAS</b><small>Editar / importar Excel</small></button><button onClick={()=>go("costs")}><span>◆</span><b>CUSTOS</b><small>Memória automática</small></button><button onClick={()=>go("point")}><span>◷</span><b>PONTO</b><small>Jornada e correções</small></button><button onClick={()=>go("manual")}><span>⚙</span><b>PROCESSOS</b><small>Manual • lavagem • acabamento • fundo</small></button><button onClick={()=>go("reports")}><span>▥</span><b>INDICADORES</b><small>Gráficos e acompanhamento</small></button></div>
  <div className="dashboard-grid dashboard-main-grid">
   <Panel title="Fluxo industrial" kicker="VISÃO EXECUTIVA"><div className="flow"><FlowButton n="01" title="Desenvolvimento" text="Amostra + processos" go={()=>go("samples")}/><FlowButton n="02" title="Receita" text="Produtos + parâmetros" go={()=>go("recipes")}/><FlowButton n="03" title="Custo" text="Custo automático" go={()=>go("costs")}/><FlowButton n="04" title="Aprovação" text="Versão congelada" go={()=>go("recipes")}/></div><div className="flow second-flow"><FlowButton n="05" title="Produção" text="Só dados aprovados" go={()=>go("production")}/><FlowButton n="06" title="Consulta" text="Rastreabilidade" go={()=>go("consult")}/><FlowButton n="07" title="Relatórios" text="Indicadores" go={()=>go("reports")}/><FlowButton n="08" title="Controle de ponto" text="Entrada • almoço • saída" go={()=>go("point")}/></div></Panel>
   <Panel title="Amostras recentes" kicker="ÚLTIMAS MOVIMENTAÇÕES"><div className="mini-table">{samples.slice(0,6).map(s=><button className="mini-row mini-row-button" key={s.id} onClick={()=>go("samples")}><b>{s.op}</b><span>{s.produto}</span><span>{s.cliente}</span><Status text={s.status}/></button>)}</div></Panel>
  </div>
  <div className="dashboard-command-grid">
    <WashingChart samples={samples}/>
    <IntelligenceCard samples={samples} products={products} manuals={manuals}/>
  </div>
  <div className="dashboard-info-grid">
    <WeatherPanel weather={weather} error={weatherError}/>
    <Panel title="Versículo do dia" kicker="PAUSA • FOCO • PROPÓSITO"><div className="verse-card"><div className="verse-symbol">✦</div><div><p>“{verse[0]}”</p><b>{verse[1]}</b></div></div></Panel>
  </div>
  <div className="quote-card textile-quote"><span>✦</span><div><b>PIADA DO DIA</b><p>“{phrase}”</p></div><button className="btn ghost" onClick={()=>setFunPhrase(DAILY_PHRASES[Math.floor(Math.random()*DAILY_PHRASES.length)])}>😂 OUTRA PIADA</button><small>{clock.toLocaleDateString('pt-BR')}</small></div>
 </>
}

function WashingChart({samples}){
 const groups=[['Manual',s=>s.processosEtapas&&Object.values(s.processosEtapas).some(x=>[...(x?.antes||[]),...(x?.depois||[])].some(p=>p.categoria==='MANUAL'))],['Lavagem',s=>String(s.lavagem||'').trim()],['Acabamento',s=>s.processosEtapas&&Object.values(s.processosEtapas).some(x=>[...(x?.antes||[]),...(x?.depois||[])].some(p=>p.categoria==='ACABAMENTO'))],['Fundo',s=>s.processosEtapas&&Object.values(s.processosEtapas).some(x=>[...(x?.antes||[]),...(x?.depois||[])].some(p=>p.categoria==='FUNDO'))]]
 const vals=groups.map(([label,fn])=>({label,value:samples.filter(fn).length})); const max=Math.max(1,...vals.map(x=>x.value))
 return <Panel title="Mapa da lavagem" kicker="GRÁFICO OPERACIONAL"><div className="wash-chart">{vals.map((x,i)=><div className={`chart-bar c${i}`} key={x.label}><div className="bar-track"><span style={{height:`${Math.max(8,(x.value/max)*100)}%`}}><b>{x.value}</b></span></div><small>{x.label}</small></div>)}</div><div className="chart-foot">Amostras monitoradas: <b>{samples.length}</b> • Processos cadastrados entram automaticamente nos indicadores.</div></Panel>
}
function IntelligenceCard({samples,products,manuals}){
 const missingRecipe=samples.filter(s=>!(s.receita||[]).length).length, pending=samples.filter(s=>s.receitaMeta?.status!=='Aprovada').length, total=products.length+manuals.length
 const tips=[]
 if(missingRecipe) tips.push(`${missingRecipe} amostra(s) ainda sem receita.`) 
 if(pending) tips.push(`${pending} receita(s) aguardam aprovação.`)
 if(!products.length) tips.push('Cadastre os produtos químicos usados no dia a dia.')
 if(!manuals.length) tips.push('Cadastre os processos e defina se são Manual, Lavagem, Acabamento ou Fundo.')
 if(!tips.length) tips.push('Base organizada. O sistema encontrou receitas, processos e produtos suficientes para operar.')
 return <Panel title="AMOSTRA IA" kicker="ASSISTENTE INTELIGENTE"><div className="ai-orb"><span>AI</span><i/><i/><i/></div><div className="ai-copy"><b>Análise automática da base</b><p>{tips[0]}</p><div className="ai-list">{tips.slice(1,4).map((t,i)=><span key={i}>✦ {t}</span>)}</div><small>{total} cadastros disponíveis para análise local.</small></div></Panel>
}
function WeatherPanel({weather,error}){
 if(!weather) return <Panel title="Clima • Macatuba/SP" kicker="ATUALIZAÇÃO AUTOMÁTICA"><div className="weather-loading">◌ Carregando clima de Macatuba...</div></Panel>
 const c=weather.current, d=weather.daily
 const codeLabel=weatherLabel(c.weather_code)
 return <Panel title="Clima • Macatuba/SP" kicker="DADOS METEOROLÓGICOS AO VIVO"><div className="weather-card"><div className="weather-now"><span className="weather-icon">{weatherIcon(c.weather_code,c.is_day)}</span><div><strong>{Math.round(c.temperature_2m)}°C</strong><span>{codeLabel}</span></div></div><div className="weather-stats"><div><small>Sensação</small><b>{Math.round(c.apparent_temperature)}°</b></div><div><small>Umidade</small><b>{c.relative_humidity_2m}%</b></div><div><small>Vento</small><b>{Math.round(c.wind_speed_10m)} km/h</b></div><div><small>Chuva</small><b>{c.precipitation} mm</b></div></div></div><div className="forecast-strip">{d.time.slice(0,4).map((day,i)=><div key={day}><small>{i===0?'HOJE':new Date(`${day}T12:00:00`).toLocaleDateString('pt-BR',{weekday:'short'}).toUpperCase()}</small><b>{Math.round(d.temperature_2m_max[i])}° / {Math.round(d.temperature_2m_min[i])}°</b><span>{d.precipitation_probability_max[i]}% chuva</span></div>)}</div></Panel>
}
function TimeControlPanel({clock,point,registerPoint,open}){const a=getTimeAlert(clock);const next=nextPointType(point);return <div className="time-panel"><div className={`time-big ${a.level}`}><b>{clock.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'})}</b><span>{a.label}</span></div><div className="point-grid"><PointMini label="ENTRADA" value={point?.entrada} type="entrada"/><PointMini label="ALMOÇO" value={point?.almocoSaida} type="almocoSaida"/><PointMini label="RETORNO" value={point?.almocoRetorno} type="almocoRetorno"/><PointMini label="SAÍDA" value={point?.saida} type="saida"/></div><div className="point-actions"><button className="btn primary" disabled={!next} onClick={()=>next&&registerPoint(next)}>{next?`◷ REGISTRAR ${pointLabel(next).toUpperCase()}`:'✓ PONTO DO DIA COMPLETO'}</button><button className="btn ghost" onClick={open}>ABRIR CONTROLE</button></div><div className="point-alert">● {a.level==='alert'?'Hora de registrar o ponto.':next?`Próximo registro: ${pointLabel(next)}.`:'Todos os registros de hoje foram feitos.'}</div></div>}
function PointMini({label,value}){return <div className={value?'done':''}><small>{label}</small><b>{value?new Date(value).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}):'--:--'}</b></div>} 
function pointLabel(type){return ({entrada:'Entrada',almocoSaida:'Saída almoço',almocoRetorno:'Retorno almoço',saida:'Saída'})[type]||type}
function nextPointType(point){if(!point?.entrada)return 'entrada';if(!point?.almocoSaida)return 'almocoSaida';if(!point?.almocoRetorno)return 'almocoRetorno';if(!point?.saida)return 'saida';return null}
function AmbientEffects(){return <div className="ambient-effects" aria-hidden="true"><i/><i/><i/><i/><i/><div className="scanline"/></div>}
function FlowButton({n,title,text,go}){return <button className="flow-item flow-button" onClick={go}><span>{n}</span><b>{title}</b><small>{text}</small><em>ABRIR →</em></button>} 

function weatherLabel(code){if(code===0)return 'Céu limpo';if([1,2,3].includes(code))return 'Nublado / parcialmente nublado';if([45,48].includes(code))return 'Neblina';if([51,53,55,56,57].includes(code))return 'Garoa';if([61,63,65,66,67,80,81,82].includes(code))return 'Chuva';if([95,96,99].includes(code))return 'Trovoada';return 'Condição variável'}
function weatherIcon(code,day=1){if([95,96,99].includes(code))return '⛈️';if([61,63,65,80,81,82,51,53,55].includes(code))return '🌧️';if([1,2,3].includes(code))return day?'⛅':'☁️';if([45,48].includes(code))return '🌫️';return day?'☀️':'🌙'}
function calculateSampleCost(sample){
 const recipeCost=(sample.receita||[]).reduce((a,r)=>a+num(r.quantidadeKg)*num(r.preco),0)
 const processCost=Object.values(sample.processosEtapas||{}).flatMap(x=>[...(x?.antes||[]),...(x?.depois||[])]).reduce((a,p)=>a+num(p.totalCost ?? p.custoTotal ?? 0),0)
 const extra=(sample.custosExtras||[]).reduce((a,x)=>a+num(x.valor),0)
 return recipeCost+processCost+extra
}
function Metric({icon,title,value,sub,accent}){return <div className={`metric ${accent}`}><div className="metric-icon">{icon}</div><div><small>{title}</small><strong>{value}</strong><span>{sub}</span></div></div>}
function Flow({n,title,text}){return <div className="flow-item"><span>{n}</span><b>{title}</b><small>{text}</small></div>}
function Panel({title,kicker,children,action}){return <section className="panel"><div className="panel-head"><div><small>{kicker}</small><h3>{title}</h3></div>{action}</div>{children}</section>}
function Status({text}){return <span className={`status ${text?.includes('Aprov')?'green':text?.includes('desenvol')?'orange':text?.includes('Produ')?'cyan':'gray'}`}>{text}</span>}

function Samples({samples,open,create}){
 const [show,setShow]=useState(false), [q,setQ]=useState('')
 const filtered=samples.filter(s=>[s.op,s.produto,s.cliente,s.referencia].join(' ').toLowerCase().includes(q.toLowerCase()))
 return <><PageTitle kicker="DESENVOLVIMENTO" title="Amostras" desc="Amostra é a origem oficial da receita e da produção." action={<button className="btn primary" onClick={()=>setShow(true)}>+ NOVA AMOSTRA</button>}/>
 <div className="toolbar"><input className="search" placeholder="⌕  Buscar OP, produto, cliente..." value={q} onChange={e=>setQ(e.target.value)}/><span className="toolbar-count">{filtered.length} registros</span></div>
 <div className="data-table"><div className="thead"><span>OP</span><span>PRODUTO</span><span>CLIENTE</span><span>TECID0</span><span>QUANT.</span><span>STATUS</span><span/></div>{filtered.map(s=><button className="trow" key={s.id} onClick={()=>open(s.id)}><b>{s.op}</b><span>{s.produto}</span><span>{s.cliente}</span><span>{s.tecido}</span><span>{s.quantidade} pç</span><Status text={s.status}/><span className="arrow">→</span></button>)}</div>
 {show&&<SampleModal close={()=>setShow(false)} save={s=>{create(s);setShow(false)}}/>}</>
}
function PageTitle({kicker,title,desc,action}){return <div className="page-title"><div><div className="eyebrow">{kicker}</div><h2>{title}</h2><p>{desc}</p></div>{action}</div>}
function SampleModal({close,save}){
 const [f,setF]=useState({op:'',spa:'',produto:'',referencia:'',totvs:'',cliente:'',tecido:'',quantidade:1,peso:0.5,lavagem:'',responsavel:'Pablo',observacoes:''})
 const set=(k,v)=>setF(x=>({...x,[k]:v})); const total=num(f.quantidade)*num(f.peso)
 return <Modal title="Nova amostra" close={close}><div className="form-grid">{[['op','OP'],['spa','SPA'],['produto','Produto'],['referencia','Referência'],['totvs','TOTVS'],['cliente','Cliente'],['tecido','Tecido'],['lavagem','Lavagem'],['responsavel','Responsável']].map(([k,l])=><label key={k}>{l}<input value={f[k]} onChange={e=>set(k,e.target.value)}/></label>)}<label>Quantidade<input type="number" value={f.quantidade} onChange={e=>set('quantidade',e.target.value)}/></label><label>Peso unitário (kg)<input type="number" step="0.001" value={f.peso} onChange={e=>set('peso',e.target.value)}/></label><label className="span-2">Observações<textarea value={f.observacoes} onChange={e=>set('observacoes',e.target.value)}/></label></div><div className="calc-line"><span>Peso total calculado</span><b>{total.toFixed(3)} kg</b></div><div className="modal-actions"><button className="btn ghost" onClick={close}>Cancelar</button><button className="btn primary" onClick={()=>save({...f,id:uid('AM'),dataEntrada:brDate,status:'Em desenvolvimento',pesoTotal:total,receitaMeta:{versao:'V01',status:'Em desenvolvimento',observacao:''},produtosReceita:[],processosEtapas:{},receita:[],custosExtras:[],obsCusto:'',obsReceita:''})}>Criar amostra</button></div></Modal>
}
function Modal({title,close,children}){return <div className="modal-backdrop"><div className="modal"><div className="modal-head"><div><small>AMOSTRA</small><h3>{title}</h3></div><button className="icon-btn" onClick={close}>×</button></div>{children}</div></div>}

function SampleDetail({sample,update,back,go,toast,products,manuals}){
 const [tab,setTab]=useState('overview')
 const save=(patch,msg='Alterações salvas.')=>{update(patch);toast(msg)}
 return <><div className="detail-head"><button className="back" onClick={back}>← Voltar</button><div><div className="eyebrow">DESENVOLVIMENTO / AMOSTRA</div><h2>OP {sample.op} • {sample.produto}</h2><p>{sample.cliente} • {sample.referencia} • {sample.tecido}</p></div><div className="detail-actions"><Status text={sample.status}/><button className="btn print" onClick={()=>openPrintWindow(sample,'recipe')}>⎙ Imprimir</button></div></div>
 <div className="detail-tabs">{[['overview','Visão geral'],['manual','01 Manual'],['washing','02 Lavagem'],['finish','03 Acabamento'],['background','04 Fundo'],['recipe','05 Receita'],['cost','06 Custo']].map(([id,l])=><button className={tab===id?'active':''} key={id} onClick={()=>setTab(id)}>{l}</button>)}</div>
 {tab==='overview'&&<Overview sample={sample} setTab={setTab}/>} 
 {['manual','washing','finish','background'].includes(tab)&&<StageEditor sample={sample} stage={tab} save={save} manuals={manuals}/>} 
 {tab==='recipe'&&<RecipeEditor sample={sample} save={save} products={products}/>} 
 {tab==='cost'&&<CostEditor sample={sample} save={save}/>} 
 <PrintArea sample={sample}/>
 </>
}
function Overview({sample,setTab}){return <><div className="detail-grid">{[['OP',sample.op],['SPA',sample.spa],['Produto',sample.produto],['Referência',sample.referencia],['TOTVS',sample.totvs],['Cliente',sample.cliente],['Tecido',sample.tecido],['Lavagem',sample.lavagem],['Quantidade',`${sample.quantidade} pç`],['Peso unitário',`${sample.peso} kg`],['Peso total',`${sample.pesoTotal?.toFixed?.(3)||sample.pesoTotal} kg`],['Entrada',sample.dataEntrada]].map(([a,b])=><div className="detail-item" key={a}><small>{a}</small><b>{b||'—'}</b></div>)}</div><div className="stage-grid">{[['manual','01','MANUAL','Processos antes/depois'],['washing','02','LAVAGEM','Processos químicos e máquina'],['finish','03','ACABAMENTO','Tratamentos e finalização'],['background','04','FUNDO','Tipo, bandeira e preparação'],['recipe','05','RECEITA','Produtos, %, tempo, °C e banho'],['cost','06','CUSTO','Custo por peça e total']].map(([id,n,t,d])=><button className="stage-card" key={id} onClick={()=>setTab(id)}><span>{n}</span><div><b>{t}</b><small>{d}</small></div><i>→</i></button>)}</div></>}

const stageNames={manual:'MANUAL',washing:'LAVAGEM',finish:'ACABAMENTO',background:'FUNDO'}
function StageEditor({sample,stage,save,manuals}){
 const data=sample.processosEtapas?.[stage]||{antes:[],depois:[]}
 const [side,setSide]=useState('antes'), [modal,setModal]=useState(false)
 const list=data[side]||[]
 const add=p=>save({processosEtapas:{...(sample.processosEtapas||{}),[stage]:{...data,[side]:[...list,p]}}},'Processo adicionado.')
 const remove=id=>save({processosEtapas:{...(sample.processosEtapas||{}),[stage]:{...data,[side]:list.filter(x=>x.id!==id)}}},'Processo removido.')
 const categoryMap={manual:'MANUAL',washing:'LAVAGEM',finish:'ACABAMENTO',background:'FUNDO'}
 const category=categoryMap[stage]
 const options = stage==='background'
   ? [{id:'bg-bandeira',nome:'Bandeira de Fundo',unidade:'por peça',categoria:'FUNDO',custo:0},{id:'bg-tipo',nome:'Tipo do Fundo',unidade:'por peça',categoria:'FUNDO',custo:0},{id:'bg-lacre',nome:'Lacre',unidade:'por peça',categoria:'FUNDO',custo:0}]
   : manuals.filter(m => (m.categoria || 'MANUAL') === category)
 return <><PageTitle kicker={`DESENVOLVIMENTO / ${stageNames[stage]}`} title={stageNames[stage]} desc={`Processos classificados como ${category}. Organize em ANTES e DEPOIS de LAVAR.`} action={<button className="btn primary" onClick={()=>setModal(true)}>+ ADICIONAR PROCESSO</button>}/><div className="segmented"><button className={side==='antes'?'active':''} onClick={()=>setSide('antes')}>01 • ANTES DE LAVAR</button><button className={side==='depois'?'active':''} onClick={()=>setSide('depois')}>02 • DEPOIS DE LAVAR</button></div><div className="process-list">{list.length===0?<div className="empty"><span>◌</span><b>Nenhum processo cadastrado</b><small>Cadastre um manual primeiro ou adicione um processo de fundo.</small><button className="btn primary" onClick={()=>setModal(true)}>+ Adicionar processo</button></div>:list.map((p,i)=><div className="process-row" key={p.id}><div className="process-index">{String(i+1).padStart(2,'0')}</div><div className="process-main"><b>{p.nome}</b><span>{p.modo}</span></div><div className="process-value">{p.quantidade ?? p.valor ?? 0} {p.modo==='por segundo'?'s':p.modo==='por aplicação'?'apl.':'pç'}<small>{money(p.totalCost ?? p.custoTotal ?? 0)}</small></div><button className="icon-btn danger" onClick={()=>remove(p.id)}>×</button></div>)}</div>{modal&&<ProcessModal close={()=>setModal(false)} options={options} stageCategory={category} add={p=>{add(p);setModal(false)}}/>}</>
}
function ProcessModal({close,add,options,stageCategory}){
 const [id,setId]=useState(options[0]?.id||options[0]?.nome||'')
 const [modo,setModo]=useState(options[0]?.unidade||'por peça')
 const [quantidade,setQuantidade]=useState(1)
 const [obs,setObs]=useState('')
 const chosen=options.find(x=>(x.id||x.nome)===id)||options[0]
 const unitCost=num(chosen?.custo ?? chosen?.valorUnitario ?? 0)
 const totalCost=unitCost*num(quantidade)
 useEffect(()=>{if(chosen)setModo(chosen.unidade||'por peça')},[id])
 return <Modal title="Adicionar processo" close={close}><div className="form-grid"><label className="span-2">Processo<select value={id} onChange={e=>setId(e.target.value)}>{options.map(o=><option key={o.id||o.nome} value={o.id||o.nome}>{o.nome}</option>)}</select></label><label>Tipo de cobrança<select value={modo} onChange={e=>setModo(e.target.value)}><option>por segundo</option><option>por aplicação</option><option>por peça</option></select></label><label>{modo==='por segundo'?'Segundos':modo==='por aplicação'?'Aplicações':'Peças'}<input type="number" step="0.01" value={quantidade} onChange={e=>setQuantidade(e.target.value)}/></label><label>Custo unitário<input type="number" step="0.0001" value={unitCost} readOnly/></label><label>Classificação<select value={stageCategory||'MANUAL'} disabled><option>{stageCategory||'MANUAL'}</option></select></label><label className="span-2">Observação<textarea value={obs} onChange={e=>setObs(e.target.value)}/></label></div><div className="auto-calc"><span>Quantidade</span><b>{num(quantidade)} {modo}</b><span>Custo calculado</span><strong>{money(totalCost)}</strong></div><div className="modal-actions"><button className="btn ghost" onClick={close}>Cancelar</button><button className="btn primary" disabled={!chosen} onClick={()=>add({id:uid('PROC'),nome:chosen?.nome||'Processo',modo,quantidade:num(quantidade),custoUnitario:unitCost,totalCost,observacao:obs,categoria:stageCategory||'MANUAL'})}>Adicionar</button></div></Modal>
}

function RecipeEditor({sample,save,products}){
 const [modal,setModal]=useState(false), [filter,setFilter]=useState('')
 const recipe=sample.receita||[]
 const total=recipe.reduce((a,r)=>a+num(r.quantidadeKg),0)
 const add=r=>save({receita:[...recipe,r]},'Item adicionado à receita.')
 const remove=id=>save({receita:recipe.filter(r=>r.id!==id)},'Item removido.')
 return <><PageTitle kicker="DESENVOLVIMENTO / 05 RECEITA" title={`Receita ${sample.receitaMeta?.versao||'V01'}`} desc="Composição técnica usando somente os produtos cadastrados no sistema." action={<div className="button-row"><button className="btn ghost" onClick={()=>openPrintWindow(sample,'recipe')}>⎙ Imprimir A4</button>{sample.receitaMeta?.status!=='Aprovada'&&<button className="btn" onClick={()=>save({receitaMeta:{...(sample.receitaMeta||{}),status:'Aprovada'}},'Receita aprovada e liberada para produção.')}>✓ APROVAR RECEITA</button>}<button className="btn primary" disabled={!products.length} onClick={()=>setModal(true)}>+ ADICIONAR ITEM</button></div>}/><div className="recipe-meta"><div><small>STATUS</small><b>{sample.receitaMeta?.status||'Em desenvolvimento'}</b></div><div><small>PESO TOTAL</small><b>{sample.pesoTotal?.toFixed?.(3)||sample.pesoTotal} kg</b></div><div><small>QTD. ITENS</small><b>{recipe.length}</b></div><div><small>CONSUMO CALCULADO</small><b>{total.toFixed(3)} kg</b></div></div><div className="toolbar"><input className="search" placeholder="⌕ Filtrar processo/produto" value={filter} onChange={e=>setFilter(e.target.value)}/></div><div className="data-table recipe-table"><div className="thead"><span>PROCESSO</span><span>%</span><span>PRODUTO</span><span>KG/G</span><span>TEMPO</span><span>°C</span><span>BANHO</span><span/></div>{recipe.filter(r=>[r.processo,r.produto].join(' ').toLowerCase().includes(filter.toLowerCase())).map(r=><div className="trow static" key={r.id}><b>{r.processo}</b><span>{r.percentual}%</span><span>{r.produto}</span><span>{r.quantidadeKg.toFixed(3)} kg</span><span>{r.tempo||'—'} min</span><span>{r.temperatura||'—'}</span><span>{r.relacaoBanho||'—'}</span><button className="icon-btn danger" onClick={()=>remove(r.id)}>×</button></div>)}</div>{modal&&<RecipeItemModal close={()=>setModal(false)} add={r=>{add(r);setModal(false)}} sample={sample} products={products}/>}<div className="recipe-note"><b>Regra de cálculo</b><span>A quantidade é calculada automaticamente pelo peso total da amostra × percentual informado.</span></div></>
}
function RecipeItemModal({close,add,sample,products}){
 const [f,setF]=useState({processo:'',percentual:1,produtoId:'',tempo:10,temperatura:40,relacaoBanho:1}); const set=(k,v)=>setF(x=>({...x,[k]:v})); const product=products.find(p=>p.id===f.produtoId); const kg=num(sample.pesoTotal)*num(f.percentual)/100
 return <Modal title="Adicionar item da receita" close={close}><div className="form-grid"><label>Processo<input value={f.processo} onChange={e=>set('processo',e.target.value.toUpperCase())} placeholder="Ex.: STONE"/></label><label>Percentual (%)<input type="number" step="0.01" value={f.percentual} onChange={e=>set('percentual',e.target.value)}/></label><label className="span-2">Produto<select value={f.produtoId} onChange={e=>set('produtoId',e.target.value)}><option value="">Selecione um produto cadastrado...</option>{products.map(p=><option key={p.id} value={p.id}>{p.nome} • {money(p.preco)}</option>)}</select></label><label>Tempo (min)<input type="number" value={f.tempo} onChange={e=>set('tempo',e.target.value)}/></label><label>Temperatura °C<input type="number" value={f.temperatura} onChange={e=>set('temperatura',e.target.value)}/></label><label>Relação de banho<input type="number" step="0.1" value={f.relacaoBanho} onChange={e=>set('relacaoBanho',e.target.value)}/></label></div><div className="auto-calc"><span>Produto</span><b>{product?.nome||'Não selecionado'}</b><span>Quantidade automática</span><strong>{kg.toFixed(3)} kg</strong></div><div className="modal-actions"><button className="btn ghost" onClick={close}>Cancelar</button><button className="btn primary" disabled={!product} onClick={()=>add({...f,id:uid('REC'),produto:product.nome,preco:product.preco,quantidadeKg:kg})}>Adicionar à receita</button></div></Modal>
}

function CostEditor({sample,save}){
 const [extraModal,setExtraModal]=useState(false)
 const recipe=sample.receita||[]; const extras=sample.custosExtras||[]
 const productCost=recipe.reduce((a,r)=>a+num(r.quantidadeKg)*num(r.preco),0)
 const processes=Object.values(sample.processosEtapas||{}).flatMap(x=>[...(x?.antes||[]),...(x?.depois||[])])
 const stageCost=processes.reduce((a,p)=>a+num(p.totalCost ?? p.custoTotal ?? 0),0)
 const extra=extras.reduce((a,x)=>a+num(x.valor),0)
 const total=productCost+stageCost+extra
 const perPiece=sample.quantidade?total/sample.quantidade:0
 const perKg=sample.pesoTotal?total/sample.pesoTotal:0
 return <><PageTitle kicker="DESENVOLVIMENTO / 06 CUSTO" title="Custo da receita" desc="Custo calculado diretamente da receita, dos processos e dos extras cadastrados." action={<div className="button-row"><button className="btn" onClick={()=>setExtraModal(true)}>+ CUSTO EXTRA</button><button className="btn print" onClick={()=>openPrintWindow(sample,'cost')}>⎙ Imprimir custo</button></div>}/>
 <div className="cost-grid"><Metric icon="◈" title="Produtos" value={money(productCost)} sub={`${recipe.length} itens da receita`} accent="cyan"/><Metric icon="◌" title="Processos" value={money(stageCost)} sub={`${processes.length} processos`} accent="purple"/><Metric icon="+" title="Extras" value={money(extra)} sub="Custos adicionais" accent="orange"/><Metric icon="◆" title="Custo total" value={money(total)} sub={`${money(perPiece)} / peça`} accent="green"/></div>
 <div className="cost-summary-grid"><Panel title="Indicadores do custo" kicker="ANÁLISE"><div className="cost-kpis"><div><small>CUSTO / KG</small><b>{money(perKg)}</b></div><div><small>CUSTO / PEÇA</small><b>{money(perPiece)}</b></div><div><small>PESO TOTAL</small><b>{num(sample.pesoTotal).toFixed(3)} kg</b></div><div><small>QUANTIDADE</small><b>{num(sample.quantidade)} pç</b></div></div></Panel><Panel title="Memória de cálculo" kicker="RASTREABILIDADE"><div className="cost-list"><div><span>Produtos da receita</span><b>{money(productCost)}</b></div><div><span>Processos / manuais</span><b>{money(stageCost)}</b></div><div><span>Custos extras</span><b>{money(extra)}</b></div><div className="total"><span>CUSTO TOTAL</span><b>{money(total)}</b></div></div></Panel></div>
 <Panel title="Composição do custo" kicker="DETALHAMENTO"><div className="cost-detail-table"><div className="cost-detail-head"><span>TIPO</span><span>ITEM</span><span>BASE</span><span>VALOR</span></div>{recipe.map(r=><div className="cost-detail-row" key={r.id}><span className="tag">RECEITA</span><b>{r.produto}</b><span>{r.quantidadeKg.toFixed(3)} kg × {money(r.preco)}</span><strong>{money(num(r.quantidadeKg)*num(r.preco))}</strong></div>)}{processes.map(p=><div className="cost-detail-row" key={p.id}><span className="tag">PROCESSO</span><b>{p.nome}</b><span>{p.quantidade||p.valor||0} {p.modo||''} × {money(p.custoUnitario||p.valorUnitario||0)}</span><strong>{money(p.totalCost||p.custoTotal||0)}</strong></div>)}{!recipe.length&&!processes.length&&<div className="empty"><span>◇</span><b>Nenhum custo detalhado ainda</b><small>Monte a receita e os processos para o cálculo aparecer aqui.</small></div>}</div></Panel>
 <div className="note-box"><b>Observação do custo</b><textarea value={sample.obsCusto||''} onChange={e=>save({obsCusto:e.target.value},'Observação atualizada.')}/></div>{extraModal&&<ExtraCostModal close={()=>setExtraModal(false)} add={x=>{save({custosExtras:[...extras,x]},'Custo extra adicionado.');setExtraModal(false)}}/>}</>
}
function ExtraCostModal({close,add}){const [f,setF]=useState({nome:'',valor:''});const set=(k,v)=>setF(x=>({...x,[k]:v}));return <Modal title="Adicionar custo extra" close={close}><div className="form-grid"><label className="span-2">Descrição<input autoFocus value={f.nome} onChange={e=>set('nome',e.target.value)} placeholder="Ex.: transporte, embalagem, teste..."/></label><label>Valor<input type="number" step="0.01" value={f.valor} onChange={e=>set('valor',e.target.value)} placeholder="0,00"/></label></div><div className="modal-actions"><button className="btn ghost" onClick={close}>Cancelar</button><button className="btn primary" disabled={!f.nome.trim()} onClick={()=>add({id:uid('EXT'),nome:f.nome,valor:num(f.valor)})}>Adicionar custo</button></div></Modal>}

function Costs({samples,open}){
 const total=samples.reduce((a,s)=>a+calculateSampleCost(s),0);
 return <><PageTitle kicker="DESENVOLVIMENTO / FINANCEIRO" title="Central de Custos" desc="Acompanhe o custo calculado de cada amostra a partir da receita, processos e extras." action={<div className="cost-live-badge">◆ CÁLCULO AUTOMÁTICO</div>}/>
 <div className="metric-grid"><Metric icon="◇" title="Amostras" value={samples.length} sub="Base de desenvolvimento" accent="cyan"/><Metric icon="◆" title="Custo total da base" value={money(total)} sub="Soma dos custos calculados" accent="green"/><Metric icon="⌘" title="Com receita" value={samples.filter(s=>s.receita?.length).length} sub="Receitas iniciadas" accent="purple"/><Metric icon="!" title="Pendentes" value={samples.filter(s=>s.receitaMeta?.status!=='Aprovada').length} sub="Ainda em desenvolvimento" accent="orange"/></div>
 <div className="data-table cost-central-table"><div className="thead"><span>OP</span><span>PRODUTO</span><span>RECEITA</span><span>PROCESSOS</span><span>CUSTO TOTAL</span><span>STATUS</span><span/></div>{samples.length?samples.map(s=>{const recipe=(s.receita||[]).length;const proc=Object.values(s.processosEtapas||{}).flatMap(x=>[...(x?.antes||[]),...(x?.depois||[])]).length;const cost=calculateSampleCost(s);return <button className="trow" key={s.id} onClick={()=>open(s.id)}><b>{s.op}</b><span>{s.produto}</span><span>{recipe} itens</span><span>{proc} processos</span><strong className="cost-table-value">{money(cost)}</strong><Status text={s.receitaMeta?.status||s.status}/><span className="arrow">→</span></button>}):<div className="empty"><span>◆</span><b>Nenhuma amostra cadastrada</b><small>Crie uma amostra para começar o cálculo.</small></div>}</div>
 </>
}

function PointPage({clock,currentUser,records,pointKey,registerPoint,editPoint}){
 const today=records[pointKey]||{}
 const next=nextPointType(today)
 const history=Object.values(records).filter(r=>r.userId===currentUser.id).sort((a,b)=>b.data.localeCompare(a.data)).slice(0,15)
 const worked=calculateWorked(today)
 const friday=clock.getDay()===5
 const [edit,setEdit]=useState(null)
 return <><PageTitle kicker="PRODUÇÃO / CONTROLE" title="Controle de Ponto" desc="Registre, consulte e corrija sua jornada. O histórico pode ser editado quando um registro for esquecido." action={<div className="point-live-badge"><span/> PONTO ONLINE</div>}/>
 <div className="point-hero-grid">
  <Panel title="Seu ponto de hoje" kicker={currentUser.nome.toUpperCase()}><div className="point-clock-hero"><div className="point-live-clock">{clock.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'})}</div><div className="point-date">{clock.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'long'})}</div><div className="point-next">{next?<><span>PRÓXIMO REGISTRO</span><b>{pointLabel(next)}</b></>:<><span>JORNADA</span><b>COMPLETA ✓</b></>}</div></div></Panel>
  <Panel title="Jornada de referência" kicker="HORÁRIO OPERACIONAL"><div className="schedule-cards"><div><b>07:00</b><span>Entrada</span></div><div><b>12:00</b><span>Almoço</span></div><div><b>13:00</b><span>Retorno</span></div><div><b>{friday?'16:00':'17:00'}</b><span>Saída</span></div></div><div className="point-worked"><span>Tempo registrado hoje</span><strong>{formatMinutes(worked)}</strong></div></Panel>
 </div>
 <div className="point-actions-big">{[['entrada','ENTRADA','07:00'],['almocoSaida','SAÍDA PARA ALMOÇO','12:00'],['almocoRetorno','RETORNO DO ALMOÇO','13:00'],['saida','SAÍDA',friday?'16:00':'17:00']].map(([type,label,h])=><button key={type} className={`point-register-card ${today[type]?'done':''} ${next===type?'next':''}`} disabled={!!today[type]||next!==type} onClick={()=>registerPoint(type)}><span className="point-card-icon">{today[type]?'✓':'◷'}</span><div><b>{today[type]?'REGISTRADO':label}</b><small>{today[type]?fmtTime(today[type]):`Previsto ${h}`}</small></div><em>{today[type]?'FEITO':next===type?'REGISTRAR →':'AGUARDANDO'}</em></button>)}</div>
 <Panel title="Histórico recente" kicker="RASTREABILIDADE • EDIÇÃO MANUAL"><div className="point-history">{history.length?history.map(r=><div className="point-history-row editable-point-row" key={r.data}><b>{new Date(`${r.data}T12:00:00`).toLocaleDateString('pt-BR')}</b><span>Entrada {r.entrada?fmtTime(r.entrada):'—'}</span><span>Almoço {r.almocoSaida?fmtTime(r.almocoSaida):'—'}</span><span>Retorno {r.almocoRetorno?fmtTime(r.almocoRetorno):'—'}</span><span>Saída {r.saida?fmtTime(r.saida):'—'}</span><button className="btn edit-point-btn" onClick={()=>setEdit(r)}>✎ EDITAR</button></div>):<div className="empty"><span>◷</span><b>Nenhum histórico ainda</b><small>Seu primeiro registro aparecerá aqui.</small></div>}</div></Panel>
 {edit&&<PointEditModal record={edit} close={()=>setEdit(null)} save={r=>{editPoint(r);setEdit(null)}}/>}
 </>}
function PointEditModal({record,close,save}){
 const toInput=v=>v?new Date(v).toLocaleString('sv-SE',{timeZone:'America/Sao_Paulo'}).replace(' ','T').slice(0,16):''
 const [f,setF]=useState({data:record.data,entrada:toInput(record.entrada),almocoSaida:toInput(record.almocoSaida),almocoRetorno:toInput(record.almocoRetorno),saida:toInput(record.saida)})
 const set=(k,v)=>setF(x=>({...x,[k]:v}))
 const iso=v=>v?new Date(v).toISOString():null
 return <Modal title="Editar ponto" close={close}><div className="edit-point-note">Use esta tela para corrigir um dia em que o ponto não foi registrado. O horário informado fica salvo no histórico.</div><div className="form-grid"><label>Data<input type="date" value={f.data} onChange={e=>set('data',e.target.value)}/></label><label>Entrada<input type="datetime-local" value={f.entrada} onChange={e=>set('entrada',e.target.value)}/></label><label>Saída almoço<input type="datetime-local" value={f.almocoSaida} onChange={e=>set('almocoSaida',e.target.value)}/></label><label>Retorno almoço<input type="datetime-local" value={f.almocoRetorno} onChange={e=>set('almocoRetorno',e.target.value)}/></label><label>Saída<input type="datetime-local" value={f.saida} onChange={e=>set('saida',e.target.value)}/></label></div><div className="modal-actions"><button className="btn ghost" onClick={close}>Cancelar</button><button className="btn primary" onClick={()=>save({...record,data:f.data,_originalData:record.data,entrada:iso(f.entrada),almocoSaida:iso(f.almocoSaida),almocoRetorno:iso(f.almocoRetorno),saida:iso(f.saida)})}>Salvar correção</button></div></Modal>}
function fmtTime(v){return new Date(v).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}
function calculateWorked(p){if(!p?.entrada)return 0;const a=new Date(p.entrada);const b=p.almocoSaida?new Date(p.almocoSaida):null;const c=p.almocoRetorno?new Date(p.almocoRetorno):null;const d=p.saida?new Date(p.saida):null;let total=0;if(b)total+=Math.max(0,(b-a)/60000);if(c&&d)total+=Math.max(0,(d-c)/60000);return Math.round(total)}
function formatMinutes(v){const h=Math.floor(v/60);const m=v%60;return `${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}min`}

function RecipeCenter({samples,setSamples,open,toast}){
 const [showImport,setShowImport]=useState(false), [busy,setBusy]=useState(false)
 const handleFile=async e=>{const file=e.target.files?.[0]; if(!file)return; setBusy(true); try{const result=await importExcelRecipe(file); const target=samples[0]; if(!target){toast('Crie uma amostra antes de importar a receita.');return} const receita=result.rows.map(r=>({...r,percentual:r.percentual||0,quantidadeKg:r.quantidadeKg||((num(target.pesoTotal)*num(r.percentual))/100)})); const clone={...target,id:uid('SMP'),op:`${target.op}-IMP`,receita,receitaMeta:{...(target.receitaMeta||{}),versao:'V01-IMPORTADA',status:'Em desenvolvimento'},obsReceita:`Importada do arquivo ${file.name}.`}; setSamples(prev=>[clone,...prev]); toast(`Receita importada: ${receita.length} itens. Nova amostra ${clone.op}.`); open(clone.id)}catch(err){toast(err.message||'Não foi possível importar o Excel.')}finally{setBusy(false);e.target.value=''}}
 return <><PageTitle kicker="DESENVOLVIMENTO" title="Receitas" desc="Receitas ligadas às amostras. Importe uma planilha Excel para gerar uma cópia editável dentro do sistema." action={<div className="button-row"><button className="btn neon-btn" onClick={()=>setShowImport(true)}>⇧ IMPORTAR EXCEL</button></div>}/><div className="import-banner"><div><b>IMPORTADOR INTELIGENTE</b><span>Reconhece Processo, Produto, %, Quantidade, Tempo, Temperatura e Relação de banho.</span></div><label className="btn primary">{busy?'LENDO...':'SELECIONAR .XLSX'}<input type="file" accept=".xlsx,.csv" hidden onChange={handleFile}/></label></div><div className="data-table"><div className="thead"><span>OP</span><span>PRODUTO</span><span>VERSÃO</span><span>ITENS</span><span>STATUS</span><span/></div>{samples.map(s=><button className="trow" key={s.id} onClick={()=>open(s.id)}><b>{s.op}</b><span>{s.produto}</span><span>{s.receitaMeta?.versao||'V01'}</span><span>{s.receita?.length||0}</span><Status text={s.receitaMeta?.status||'Em desenvolvimento'}/><span className="arrow">→</span></button>)}</div>{showImport&&<Modal title="Importar receita do Excel" close={()=>setShowImport(false)}><div className="import-help"><b>Como funciona</b><p>Escolha um .xlsx ou .csv. O AMOSTRA lê a primeira planilha, identifica as colunas da receita e cria uma nova amostra com uma cópia editável.</p><small>Para uma cópia fiel, mantenha cabeçalhos como Processo, Produto, %, Quantidade, Tempo, Temperatura e Relação de banho.</small></div><label className="upload-drop"><span>⇧</span><b>Selecionar arquivo</b><small>.XLSX ou .CSV</small><input type="file" accept=".xlsx,.csv" onChange={handleFile}/></label></Modal>}</>}

function Products({products,setProducts,toast}){
 const [q,setQ]=useState(''), [modal,setModal]=useState(false)
 const list=products.filter(p=>p.nome.toLowerCase().includes(q.toLowerCase()))
 const add=f=>{setProducts(prev=>[{...f,id:uid('PROD'),ativo:true},...prev]);setModal(false);toast('Produto cadastrado com sucesso.')}
 const remove=id=>setProducts(prev=>prev.filter(p=>p.id!==id))
 return <><PageTitle kicker="CADASTRO / PRODUTOS" title="Produtos" desc="Cadastre somente os produtos realmente usados no dia a dia." action={<button className="btn primary" onClick={()=>setModal(true)}>+ NOVO PRODUTO</button>}/><div className="manual-highlight"><div><b>{products.length} produtos cadastrados</b><span>Nenhum catálogo externo é carregado automaticamente.</span></div><div className="manual-pills"><span>✦ Cadastro próprio</span><span>◆ Preço editável</span></div></div><div className="toolbar"><input className="search" placeholder="⌕ Buscar produto..." value={q} onChange={e=>setQ(e.target.value)}/><span className="toolbar-count">{list.length} encontrados</span></div><div className="data-table catalog-products"><div className="thead"><span>PRODUTO</span><span>CATEGORIA</span><span>UNIDADE</span><span>PREÇO</span><span>STATUS</span><span/></div>{list.length?list.map(p=><div className="trow static" key={p.id}><b>{p.nome}</b><span className="tag">{p.categoria}</span><span>{p.unidade}</span><span>{money(p.preco)}</span><span><span className="status green">Ativo</span></span><button className="icon-btn danger" onClick={()=>remove(p.id)}>×</button></div>):<div className="empty"><span>◈</span><b>Nenhum produto cadastrado</b><small>Comece cadastrando os produtos usados nas receitas.</small><button className="btn primary" onClick={()=>setModal(true)}>+ Cadastrar produto</button></div>}</div>{modal&&<ProductModal close={()=>setModal(false)} add={add}/>}</>
}
function ProductModal({close,add}){const [f,setF]=useState({nome:'',categoria:'Químico',unidade:'kg',preco:'',observacao:''});const set=(k,v)=>setF(x=>({...x,[k]:v}));return <Modal title="Novo produto" close={close}><div className="form-grid"><label className="span-2">Nome do produto<input autoFocus value={f.nome} onChange={e=>set('nome',e.target.value)} placeholder="Ex.: Enzima Golden"/></label><label>Categoria<select value={f.categoria} onChange={e=>set('categoria',e.target.value)}><option>Químico</option><option>Corante</option><option>Auxiliar</option><option>Acabamento</option><option>Outro</option></select></label><label>Unidade<select value={f.unidade} onChange={e=>set('unidade',e.target.value)}><option>kg</option><option>g</option><option>litro</option><option>ml</option><option>unidade</option></select></label><label>Preço<input type="number" step="0.01" value={f.preco} onChange={e=>set('preco',e.target.value)} placeholder="0,00"/></label><label className="span-2">Observação<textarea value={f.observacao} onChange={e=>set('observacao',e.target.value)}/></label></div><div className="modal-actions"><button className="btn ghost" onClick={close}>Cancelar</button><button className="btn primary" disabled={!f.nome.trim()} onClick={()=>add({...f,preco:num(f.preco)})}>Salvar produto</button></div></Modal>}
function ManualPage({manuals,setManuals,toast}){
 const [q,setQ]=useState(''), [modal,setModal]=useState(false)
 const list=manuals.filter(p=>p.nome.toLowerCase().includes(q.toLowerCase()))
 const add=f=>{setManuals(prev=>[{...f,id:uid('MAN'),ativo:true,categoria:f.categoria||'MANUAL'},...prev]);setModal(false);toast('Manual cadastrado com sucesso.')}
 const remove=id=>setManuals(prev=>prev.filter(p=>p.id!==id))
 return <><PageTitle kicker="CADASTRO / MANUAIS" title="Manuais e processos" desc="Cadastre os processos manuais que sua lavanderia realmente utiliza." action={<button className="btn primary" onClick={()=>setModal(true)}>+ NOVO MANUAL</button>}/><div className="manual-highlight"><div><b>3 formas de cobrança</b><span>Tempo • Aplicação • Peça</span></div><div className="manual-pills"><span>◷ por segundo</span><span>✦ por aplicação</span><span>◆ por peça</span></div></div><div className="toolbar"><input className="search" placeholder="⌕ Buscar manual/processo..." value={q} onChange={e=>setQ(e.target.value)}/><span className="toolbar-count">{list.length} cadastrados</span></div><div className="data-table catalog-manuals"><div className="thead"><span>MANUAL / PROCESSO</span><span>COBRANÇA</span><span>VALOR</span><span>OBSERVAÇÃO</span><span/></div>{list.length?list.map(p=><div className="trow static" key={p.id}><b>{p.nome}</b><span>{p.categoria||'MANUAL'} • {p.unidade}</span><strong>{money(p.custo)}</strong><span>{p.observacao||'—'}</span><button className="icon-btn danger" onClick={()=>remove(p.id)}>×</button></div>):<div className="empty"><span>◌</span><b>Nenhum manual cadastrado</b><small>Cadastre os processos que você usa no dia a dia.</small><button className="btn primary" onClick={()=>setModal(true)}>+ Cadastrar manual</button></div>}</div>{modal&&<ManualModal close={()=>setModal(false)} add={add}/>}</>
}
function ManualModal({close,add}){const [f,setF]=useState({nome:'',categoria:'MANUAL',unidade:'por peça',custo:'',observacao:''});const set=(k,v)=>setF(x=>({...x,[k]:v}));return <Modal title="Novo manual / processo" close={close}><div className="form-grid"><label className="span-2">Nome<input autoFocus value={f.nome} onChange={e=>set('nome',e.target.value)} placeholder="Ex.: Lixado local"/></label><label>Classificação<select value={f.categoria} onChange={e=>set('categoria',e.target.value)}><option>MANUAL</option><option>LAVAGEM</option><option>ACABAMENTO</option><option>FUNDO</option></select></label><label>Forma de cobrança<select value={f.unidade} onChange={e=>set('unidade',e.target.value)}><option>por segundo</option><option>por aplicação</option><option>por peça</option></select></label><label>Valor base<input type="number" step="0.0001" value={f.custo} onChange={e=>set('custo',e.target.value)} placeholder="0,00"/></label><label className="span-2">Observação<textarea value={f.observacao} onChange={e=>set('observacao',e.target.value)}/></label></div><div className="modal-actions"><button className="btn ghost" onClick={close}>Cancelar</button><button className="btn primary" disabled={!f.nome.trim()} onClick={()=>add({...f,custo:num(f.custo)})}>Salvar manual</button></div></Modal>}
function ProcessPage({manuals}){return <><PageTitle kicker="DESENVOLVIMENTO" title="Processos" desc="Visão dos processos disponíveis no cadastro próprio."/><div className="process-cards">{[['01','MANUAL','Por segundo / aplicação / peça','cyan'],['02','LAVAGEM','Processos cadastrados para lavagem','blue'],['03','ACABAMENTO','Processos cadastrados para acabamento','purple'],['04','FUNDO','Bandeira, tipo e lacres','orange']].map(x=><div className={`big-process ${x[3]}`} key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><small>{x[2]}</small></div>)}</div><div className="info-banner"><b>{manuals.length} manuais disponíveis</b><span>O sistema usa somente os processos cadastrados por você.</span></div></>}

function Production({samples}){const approved=samples.filter(s=>s.receitaMeta?.status==='Aprovada');return <><PageTitle kicker="PRODUÇÃO" title="Produção" desc="Somente receitas aprovadas podem alimentar a produção."/><div className="lock-banner">🔒 <b>Regra de segurança:</b> Produção não edita receitas nem desenvolvimento.</div><div className="data-table"><div className="thead"><span>OP</span><span>PRODUTO</span><span>VERSÃO</span><span>PESO</span><span>STATUS</span></div>{approved.length?approved.map(s=><div className="trow static" key={s.id}><b>{s.op}</b><span>{s.produto}</span><span>{s.receitaMeta.versao}</span><span>{s.pesoTotal} kg</span><Status text="Aprovada"/></div>):<div className="empty"><span>▣</span><b>Nenhuma receita aprovada</b><small>A aprovação será feita no módulo de desenvolvimento.</small></div>}</div></>}
function Consult({samples,open}){const [q,setQ]=useState('');const list=samples.filter(s=>`${s.op} ${s.produto} ${s.referencia} ${s.totvs}`.toLowerCase().includes(q.toLowerCase()));return <><PageTitle kicker="PRODUÇÃO / CONSULTA" title="Consultar Amostra" desc="Pesquisa operacional sem permissão para alterar desenvolvimento."/><input className="search wide-search" placeholder="⌕ OP, produto, referência ou TOTVS" value={q} onChange={e=>setQ(e.target.value)}/><div className="data-table">{list.map(s=><button className="trow" key={s.id} onClick={()=>open(s.id)}><b>{s.op}</b><span>{s.produto}</span><span>{s.referencia}</span><span>{s.totvs}</span><Status text={s.receitaMeta?.status||s.status}/><span>→</span></button>)}</div></>}
function Reports({samples}){const total=samples.length;const pieces=samples.reduce((a,s)=>a+num(s.quantidade),0);return <><PageTitle kicker="CONTROLE" title="Relatórios" desc="Indicadores gerenciais do desenvolvimento."/><div className="metric-grid"><Metric icon="#" title="Amostras" value={total} sub="Base atual" accent="cyan"/><Metric icon="◆" title="Peças" value={pieces} sub="Quantidade cadastrada" accent="green"/><Metric icon="⌘" title="Receitas" value={samples.filter(s=>s.receita?.length).length} sub="Composição iniciada" accent="purple"/><Metric icon="!" title="Pendências" value={samples.filter(s=>s.receitaMeta?.status!=='Aprovada').length} sub="Requerem análise" accent="orange"/></div></>}
function Users({users,setUsers}){const [modal,setModal]=useState(false);const add=u=>setUsers(p=>[...p,{...u,id:uid('USR'),ativo:true}]);const toggle=id=>setUsers(p=>p.map(u=>u.id===id?{...u,ativo:!u.ativo}:u));return <><PageTitle kicker="ADMINISTRAÇÃO" title="Usuários e permissões" desc="Cadastro centralizado de acessos, funções e responsabilidades." action={<button className="btn primary" onClick={()=>setModal(true)}>+ NOVO USUÁRIO</button>}/><div className="security-grid"><div><b>Administrador</b><span>Controle total, usuários, permissões e configurações.</span></div><div><b>Desenvolvimento</b><span>Amostras, processos, receitas e custos.</span></div><div><b>Produção</b><span>Consulta e execução somente com receita aprovada.</span></div></div><div className="data-table"><div className="thead"><span>NOME</span><span>LOGIN</span><span>FUNÇÃO</span><span>STATUS</span><span/></div>{users.map(u=><div className="trow static" key={u.id}><b>{u.nome}</b><span>{u.login}</span><span>{u.funcao}</span><span><button className={`switch ${u.ativo?'on':''}`} onClick={()=>toggle(u.id)}><i/></button> {u.ativo?'Ativo':'Inativo'}</span><span>Admin</span></div>)}</div>{modal&&<UserModal close={()=>setModal(false)} add={u=>{add(u);setModal(false)}}/>}</>}
function UserModal({close,add}){const [f,setF]=useState({nome:'',login:'',senha:'',funcao:'Auxiliar'});const set=(k,v)=>setF(x=>({...x,[k]:v}));return <Modal title="Novo usuário" close={close}><div className="form-grid"><label>Nome<input value={f.nome} onChange={e=>set('nome',e.target.value)}/></label><label>Login<input value={f.login} onChange={e=>set('login',e.target.value)}/></label><label>Senha<input value={f.senha} onChange={e=>set('senha',e.target.value)}/></label><label>Função<select value={f.funcao} onChange={e=>set('funcao',e.target.value)}>{roles.map(r=><option key={r}>{r}</option>)}</select></label></div><div className="modal-actions"><button className="btn ghost" onClick={close}>Cancelar</button><button className="btn primary" disabled={!f.nome||!f.login||!f.senha} onClick={()=>add(f)}>Criar usuário</button></div></Modal>}

function PrintArea({sample}){const recipe=sample.receita||[];return <div className="print-area"><div className="print-header"><div className="brand">AMO<span>STRA</span></div><div><b>FICHA TÉCNICA DE DESENVOLVIMENTO</b><span>Emissão: {brDate}</span></div></div><div className="print-id"><b>OP {sample.op}</b><span>{sample.produto}</span><span>{sample.cliente}</span><span>Versão {sample.receitaMeta?.versao||'V01'}</span></div><h4>IDENTIFICAÇÃO</h4><div className="print-grid">{[['SPA',sample.spa],['Referência',sample.referencia],['TOTVS',sample.totvs],['Tecido',sample.tecido],['Lavagem',sample.lavagem],['Quantidade',sample.quantidade],['Peso unitário',sample.peso],['Peso total',sample.pesoTotal]].map(x=><div key={x[0]}><small>{x[0]}</small><b>{x[1]||'—'}</b></div>)}</div><h4>RECEITA</h4><table><thead><tr><th>PROCESSO</th><th>%</th><th>PRODUTO</th><th>KG/G</th><th>TEMPO</th><th>°C</th><th>BANHO</th></tr></thead><tbody>{recipe.map(r=><tr key={r.id}><td>{r.processo}</td><td>{r.percentual}</td><td>{r.produto}</td><td>{r.quantidadeKg.toFixed(3)}</td><td>{r.tempo||'—'}</td><td>{r.temperatura||'—'}</td><td>{r.relacaoBanho||'—'}</td></tr>)}</tbody></table><h4>OBSERVAÇÕES</h4><div className="print-notes">{sample.obsReceita||'Sem observações.'}</div><div className="signatures"><div>Responsável Desenvolvimento</div><div>Líder</div><div>Produção</div></div></div>}

export default App
