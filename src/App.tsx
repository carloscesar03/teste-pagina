/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="scroll-smooth">
      {/* ==========================================
           PRIMEIRA DOBRA (Fundo Escuro)
      =========================================== */}
      <section className="bg-zinc-950 text-white pt-16 pb-20 px-6 lg:pt-24 lg:pb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-rose-600 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-rose-600 opacity-10 blur-3xl"></div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
              
              <div className="flex flex-col justify-center text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 lg:mb-6 tracking-tight uppercase">
                      TORNE-SE A MULHER <span className="text-rose-500">QUE TODO HOMEM DESEJA</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl font-light text-gray-300 mb-8 lg:mb-6 leading-relaxed">
                      Descubra como despertar interesse real, provocar curiosidade e se tornar naturalmente inesquecível.
                  </p>

                  <div className="block lg:hidden relative w-full max-w-md mx-auto mb-10 flex justify-center">
                      <img src="https://i.postimg.cc/XJC6zTtk/Capa_Nova_Torne_se_Sem_Fundo_corte_resize.png" 
                           alt="E-book Torne-se a Mulher Que Todo Homem Deseja" 
                           width="600" height="800"
                           fetchPriority="high"
                           className="relative z-10 w-[85%] object-contain drop-shadow-2xl" />
                  </div>
                  
                  <div className="space-y-2 text-gray-400 font-medium text-lg mb-10 border-l-2 border-rose-500 pl-4 w-fit mx-auto lg:mx-0 text-left">
                      <p>Sem mudar quem você é.</p>
                      <p>Sem forçar situações.</p>
                      <p>Sem correr atrás.</p>
                  </div>
                  
                  <div className="mb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start sm:items-end gap-2 sm:gap-6">
                      <span className="text-gray-500 line-through text-xl font-medium">De R$ 97,00</span>
                      <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Por apenas R$ 17,00</span>
                  </div>
                  
                  <div className="flex flex-col items-center lg:items-start w-full">
                      <a href="https://lastlink.com/p/CA5B2A829/checkout-payment/" className="btn-pulse-green inline-block w-full sm:w-[90%] lg:w-[90%] text-center bg-green-600 hover:bg-green-700 text-white font-black py-5 px-8 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all text-lg lg:text-xl uppercase tracking-wider">
                          QUERO ME TORNAR INESQUECÍVEL
                      </a>
                      
                      <div className="mt-4 flex flex-col items-center lg:items-start gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                              <span>Compra 100% Segura & Acesso Imediato</span>
                          </div>
                          <img src="https://i.postimg.cc/LsVHTKKJ/xxxcompra_Segura_vetor_branco1_1.png" alt="Formas de Pagamento" width="300" height="40" loading="lazy" className="mt-2 opacity-70 h-8 object-contain" />
                      </div>
                  </div>
              </div>
              
              <div className="hidden lg:flex relative w-full max-w-md mx-auto lg:max-w-full justify-center">
                  <img src="https://i.postimg.cc/XJC6zTtk/Capa_Nova_Torne_se_Sem_Fundo_corte_resize.png" 
                       alt="E-book Torne-se a Mulher Que Todo Homem Deseja" 
                       width="600" height="800"
                       fetchPriority="high"
                       className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              </div>
          </div>
      </section>

      {/* ==========================================
           IMAGINE A CENA (Fundo Claro)
      =========================================== */}
      <section className="py-20 lg:py-28 px-6 bg-white text-center">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-zinc-950 tracking-widest uppercase">IMAGINE A CENA</h2>
              
              <div className="space-y-3 text-xl sm:text-2xl font-light text-gray-600">
                  <p>Você chega.</p>
                  <p>Ele percebe.</p>
                  <p>A conversa flui.</p>
                  <p>O olhar sustenta.</p>
                  <p>Ele se inclina mais perto.</p>
                  <p>Ele presta atenção no que você diz.</p>
              </div>
              
              <div className="mt-12 space-y-3 text-xl sm:text-2xl font-medium text-zinc-900">
                  <p>Agora imagine isso se repetindo.</p>
                  <p>Com naturalidade.</p>
                  <p>Sem esforço.</p>
              </div>
              
              <div className="mt-16 text-3xl sm:text-4xl font-black text-rose-600 uppercase tracking-tight">
                  <p className="mb-2">Não é sorte.</p>
                  <p>É posicionamento.</p>
              </div>
          </div>
      </section>

      {/* ==========================================
           O QUE VOCÊ VAI DESBLOQUEAR (Fundo Suave/Bege)
      =========================================== */}
      <section className="py-20 lg:py-24 px-6 bg-[#FAFAFA] border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black mb-14 text-center text-zinc-950 tracking-tight uppercase">
                  O QUE VOCÊ VAI DESBLOQUEAR
              </h2>
              
              <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-50">
                      <div className="bg-rose-50 p-2 rounded-full mr-5 shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-600 border-2 border-rose-600 rounded-full p-1"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                          Como gerar tensão e curiosidade logo nas primeiras conversas
                      </p>
                  </div>
                  
                  <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-50">
                      <div className="bg-rose-50 p-2 rounded-full mr-5 shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-600 border-2 border-rose-600 rounded-full p-1"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                          O jeito certo de responder mensagens para aumentar o interesse
                      </p>
                  </div>
                  
                  <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-50">
                      <div className="bg-rose-50 p-2 rounded-full mr-5 shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-600 border-2 border-rose-600 rounded-full p-1"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                          Como sair da posição de “disponível demais” para “difícil de esquecer”
                      </p>
                  </div>
                  
                  <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-50">
                      <div className="bg-rose-50 p-2 rounded-full mr-5 shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-600 border-2 border-rose-600 rounded-full p-1"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                          Como fazer ele investir mais tempo e energia naturalmente
                      </p>
                  </div>
                  
                  <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-50">
                      <div className="bg-rose-50 p-2 rounded-full mr-5 shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-600 border-2 border-rose-600 rounded-full p-1"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                          Como se tornar a mulher que marca presença sem precisar competir com ninguém
                      </p>
                  </div>
              </div>
              
              <div className="mt-14 text-center">
                  <a href="https://lastlink.com/p/CA5B2A829/checkout-payment/" className="btn-pulse-green inline-block w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-black py-5 px-10 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all text-lg uppercase tracking-wide">
                      EU QUERO ESSE PODER
                  </a>
              </div>
          </div>
      </section>

      {/* ==========================================
           A DIFERENÇA ENTRE SER LEGAL E INESQUECÍVEL
      =========================================== */}
      <section className="py-20 lg:py-28 px-6 bg-zinc-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-12 text-rose-500 tracking-tight uppercase">
                  A DIFERENÇA ENTRE SER LEGAL E SER INESQUECÍVEL
              </h2>
              
              <div className="space-y-2 text-xl font-light text-gray-300 mb-10">
                  <p>Muitas mulheres são bonitas.</p>
                  <p>Muitas são simpáticas.</p>
                  <p>Muitas são interessantes.</p>
              </div>
              
              <div className="text-2xl sm:text-3xl font-semibold mb-12 text-white">
                  <p className="mb-4">Poucas sabem provocar impacto emocional.</p>
                  <p className="text-rose-400 font-light italic text-xl">Homens se conectam com a sensação que você desperta.</p>
              </div>
              
              <div className="bg-zinc-950 p-8 rounded-2xl max-w-2xl mx-auto border border-zinc-800 mb-12 text-left shadow-2xl">
                  <p className="text-lg font-bold mb-6 text-center text-gray-300 uppercase tracking-widest text-sm">Quando você entende isso:</p>
                  <ul className="space-y-4 text-lg font-medium text-gray-100">
                      <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> Ele manda mensagem primeiro</li>
                      <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> Ele sugere o próximo encontro</li>
                      <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> Ele demonstra mais interesse</li>
                      <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> Ele começa a investir</li>
                  </ul>
              </div>
              
              <div className="text-3xl font-black uppercase tracking-tight text-white">
                  <p className="mb-2">Você para de adivinhar.</p>
                  <p className="text-rose-500">E começa a conduzir.</p>
              </div>
          </div>
      </section>

      {/* ==========================================
           COMO FUNCIONA (Fundo Claro)
      =========================================== */}
      <section className="py-20 lg:py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black mb-16 text-center text-zinc-950 uppercase">COMO FUNCIONA</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
                      <span className="text-rose-600 font-black text-5xl opacity-20 block mb-4">01</span>
                      <h3 className="text-xl font-bold mb-4 text-zinc-950 uppercase">Mentalidade Magnética</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                          Você aprende a ajustar pequenos comportamentos que mudam completamente a forma como é percebida.
                      </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
                      <span className="text-rose-600 font-black text-5xl opacity-20 block mb-4">02</span>
                      <h3 className="text-xl font-bold mb-4 text-zinc-950 uppercase">Comunicação que Desperta Interesse</h3>
                      <p className="text-gray-600 leading-relaxed font-medium mb-2">
                          Frases. Timing. Silêncio.
                      </p>
                      <p className="text-gray-600 leading-relaxed font-medium">
                          Você vai entender o poder do que dizer — e do que não dizer.
                      </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
                      <span className="text-rose-600 font-black text-5xl opacity-20 block mb-4">03</span>
                      <h3 className="text-xl font-bold mb-4 text-zinc-950 uppercase">Postura de Alto Valor</h3>
                      <div className="text-gray-600 leading-relaxed font-medium space-y-1 mb-3">
                          <p>Sem arrogância.</p>
                          <p>Sem frieza.</p>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-medium">
                          Mas com presença suficiente para que ele sinta que pode te perder.
                      </p>
                  </div>
              </div>
              
              <div className="text-center max-w-3xl mx-auto bg-rose-50 py-10 px-6 rounded-2xl">
                  <p className="text-2xl font-bold text-zinc-950 mb-2">E quando existe a possibilidade de perder…</p>
                  <p className="text-3xl font-black text-rose-600 uppercase">Existe esforço para manter.</p>
              </div>
          </div>
      </section>

      {/* ==========================================
           RELATOS (Fundo Cinza Muito Claro)
      =========================================== */}
      <section className="py-20 px-6 bg-[#F3F4F6]">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black mb-12 text-zinc-950 uppercase">O QUE AS LEITORAS RELATAM</h2>
              
              <p className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-8">Depois de aplicar o método:</p>
              
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm text-left inline-block w-full max-w-2xl mx-auto">
                  <ul className="space-y-5 text-lg md:text-xl font-medium text-gray-800">
                      <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.3-.4a2.5 2.5 0 1 0-3.6 3.5l3.9 3.9 3.9-3.9a2.5 2.5 0 0 0 0-3.5Z"/></svg> Conversas ficam mais intensas</li>
                      <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg> Homens demonstram mais iniciativa</li>
                      <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg> Encontros se tornam mais envolventes</li>
                      <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg> A sensação de correr atrás diminui</li>
                      <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg> A autoconfiança aumenta visivelmente</li>
                  </ul>
              </div>
              
              <div className="mt-14 text-2xl font-black uppercase text-zinc-950">
                  <p className="text-gray-400 line-through mb-2 text-xl font-bold">Não é sobre manipular.</p>
                  <p className="text-rose-600 text-3xl">É sobre entender dinâmica emocional.</p>
              </div>

              <div className="mt-20 pt-16 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-4">Veja o que acontece na prática:</h3>
                  
                  <p className="text-sm text-rose-500 font-medium mb-8 sm:hidden flex justify-center items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg> Arraste para o lado para ver mais
                  </p>

                  <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth">
                      <img src="https://i.postimg.cc/Dz1cp6Bg/Dep_Ana_Paula_risco.png" alt="Depoimento 1" loading="lazy" width="400" height="600" className="min-w-[85%] sm:min-w-0 w-full rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow object-cover snap-center" />
                      <img src="https://i.postimg.cc/RCgLYNQY/Dep_Camila_risco.png" alt="Depoimento 2" loading="lazy" width="400" height="600" className="min-w-[85%] sm:min-w-0 w-full rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow object-cover snap-center" />
                      <img src="https://i.postimg.cc/28JFzMt9/Dep_Carla_risco.png" alt="Depoimento 3" loading="lazy" width="400" height="600" className="min-w-[85%] sm:min-w-0 w-full rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow object-cover snap-center" />
                  </div>
              </div>
          </div>
      </section>

      {/* ==========================================
           A VERDADE (Fundo Escuro)
      =========================================== */}
      <section className="py-20 lg:py-24 px-6 bg-zinc-950 text-white text-center">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black mb-10 text-rose-500 uppercase tracking-tight">A VERDADE SOBRE ATRAÇÃO</h2>
              
              <p className="text-xl font-medium mb-10">Você gasta mensalmente para agradar um homem:</p>
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10 mb-10 max-w-2xl mx-auto shadow-2xl text-left">
                  <ul className="space-y-4 text-lg font-medium text-gray-300 mb-6">
                      <li className="flex justify-between items-center border-b border-zinc-800 pb-3">
                          <span className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg> Cabelo & Salão</span>
                          <span className="text-gray-400">R$ 150,00</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-zinc-800 pb-3">
                          <span className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg> Manicure & Unhas</span>
                          <span className="text-gray-400">R$ 60,00</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-zinc-800 pb-3">
                          <span className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Roupas & Acessórios</span>
                          <span className="text-gray-400">R$ 200,00</span>
                      </li>
                  </ul>
                  <div className="flex justify-between items-center text-xl sm:text-2xl font-black text-white pt-2">
                      <span>Custo Mensal Estimado:</span>
                      <span className="text-rose-500">R$ 410,00+</span>
                  </div>
              </div>
              
              <p className="text-xl font-light italic text-gray-400 mb-10">Tudo isso ajuda, é claro.</p>
              
              <p className="text-2xl sm:text-3xl font-bold leading-tight mb-12">
                  Mas <span className="text-rose-500 underline decoration-2 underline-offset-4">comportamento e posicionamento</span> são o que realmente definem como você é tratada.
              </p>
              
              <div className="inline-block border-2 border-green-500 bg-green-500/10 px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                  <p className="text-xl font-bold text-gray-300 mb-2">O CONHECIMENTO DEFINITIVO POR APENAS:</p>
                  <p className="text-4xl font-black text-green-400 uppercase">R$ 17,00</p>
                  <p className="text-sm font-medium text-green-500 mt-2">Pagamento Único. Sem mensalidades.</p>
              </div>
          </div>
      </section>

      {/* ==========================================
           BÔNUS (Fundo Claro)
      =========================================== */}
      <section className="py-20 lg:py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                  <span className="bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">Presentes Especiais</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 uppercase">Garantindo hoje, você leva:</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                  
                  <div className="border-2 border-gray-100 rounded-2xl p-8 relative hover:border-rose-300 transition-colors shadow-sm">
                      <div className="absolute -top-4 right-8 bg-rose-600 text-white font-bold text-sm px-4 py-1 rounded-full shadow-md uppercase">
                          Gratuito
                      </div>

                      <div className="mb-6 flex justify-center">
                          <img src="https://i.postimg.cc/wxnZrfkZ/Mockup_04.png" alt="Bônus 1" loading="lazy" width="300" height="200" className="h-40 object-contain drop-shadow-md hover:scale-105 transition-transform" />
                      </div>

                      <p className="text-rose-600 font-black uppercase tracking-widest text-sm mb-2">BÔNUS 01</p>
                      <h3 className="text-2xl font-bold mb-2 text-zinc-950 uppercase leading-tight">A FELICIDADE COMEÇA COM VOCÊ</h3>
                      <p className="text-gray-400 text-sm font-medium mb-6 line-through">Avaliado em R$ 37,00</p>
                      
                      <p className="text-gray-600 font-medium italic mb-6">Porque atração começa dentro.</p>
                      
                      <ul className="space-y-3 mb-8 text-gray-800 font-medium">
                          <li className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Fortalecimento da autoestima</li>
                          <li className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Segurança emocional</li>
                          <li className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Clareza sobre o que você merece</li>
                      </ul>
                      
                      <p className="text-xl font-black text-zinc-950 bg-gray-50 p-4 rounded-lg text-center uppercase">
                          Mulheres seguras não imploram.<br/>
                          <span className="text-rose-600">Elas escolhem.</span>
                      </p>
                  </div>

                  <div className="border-2 border-gray-100 rounded-2xl p-8 relative hover:border-rose-300 transition-colors shadow-sm">
                      <div className="absolute -top-4 right-8 bg-rose-600 text-white font-bold text-sm px-4 py-1 rounded-full shadow-md uppercase">
                          Gratuito
                      </div>

                      <div className="mb-6 flex justify-center">
                          <img src="https://i.postimg.cc/bvYBnKzQ/Mockup_03.png" alt="Bônus 2" loading="lazy" width="300" height="200" className="h-40 object-contain drop-shadow-md hover:scale-105 transition-transform" />
                      </div>

                      <p className="text-rose-600 font-black uppercase tracking-widest text-sm mb-2">BÔNUS 02</p>
                      <h3 className="text-2xl font-bold mb-2 text-zinc-950 uppercase leading-tight">CONTROLANDO A ANSIEDADE</h3>
                      <p className="text-gray-400 text-sm font-medium mb-6 line-through">Avaliado em R$ 39,90</p>
                      
                      <p className="text-gray-600 font-medium italic mb-6">Porque ansiedade pode destruir uma conexão promissora.</p>
                      
                      <ul className="space-y-3 mb-8 text-gray-800 font-medium">
                          <li className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Técnicas práticas para manter equilíbrio</li>
                          <li className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Como evitar excesso de mensagens</li>
                          <li className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Como manter o controle emocional mesmo interessada</li>
                      </ul>
                      
                      <p className="text-xl font-black text-zinc-950 bg-gray-50 p-4 rounded-lg text-center uppercase">
                          Calma é <span className="text-rose-600">poder.</span>
                      </p>
                  </div>

              </div>
          </div>
      </section>

      {/* ==========================================
           OFERTA (Fundo Escuro com Destaque)
      =========================================== */}
      <section id="oferta" className="py-20 px-6 bg-zinc-950 relative">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-8 lg:p-12 border border-rose-600/30 shadow-[0_0_50px_rgba(225,29,72,0.15)] text-center relative z-10 flex flex-col md:flex-row items-center gap-10">
              
              <div className="w-full md:w-1/2 flex justify-center">
                  <img src="https://i.postimg.cc/8cCpnyBz/Mockup_Torne_se_Completo_Com_B%C3%B4nus_removebg_preview.png" alt="Combo Completo" loading="lazy" width="500" height="500" className="w-full max-w-sm object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center justify-center md:justify-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Preço Promocional
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">VOCÊ LEVA TUDO ISSO:</h2>
                  
                  <ul className="space-y-4 mb-8 text-left text-gray-300 font-medium text-base lg:text-lg">
                      <li className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                          <span className="leading-snug"><strong className="text-white">Material Exclusivo:</strong> Torne-se a Mulher Que Todo Homem Deseja</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                          <span className="leading-snug"><strong className="text-white">Bônus 01:</strong> E-book A Felicidade Começa com Você</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                          <span className="leading-snug"><strong className="text-white">Bônus 02:</strong> E-book Controlando a Ansiedade</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                          <span className="leading-snug"><strong className="text-white">Acesso Vitalício</strong> ao conteúdo</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                          <span className="leading-snug"><strong className="text-white">Garantia Incondicional</strong> de 7 dias</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                          <span className="leading-snug"><strong className="text-white">Todas as atualizações</strong> futuras garantidas</span>
                      </li>
                  </ul>
                  
                  <div className="mb-8 border-t border-zinc-800 pt-6">
                      <p className="text-gray-500 line-through text-2xl font-medium mb-1">De R$ 97,00</p>
                      <p className="text-5xl lg:text-6xl font-black text-white tracking-tight">Por <span className="text-green-400">R$ 17,00</span></p>
                  </div>
                  
                  <a href="https://lastlink.com/p/CA5B2A829/checkout-payment/" className="btn-pulse-green inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-black py-5 px-6 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all text-xl uppercase tracking-wide mb-4">
                      QUERO ME TORNAR INESQUECÍVEL
                  </a>

                  <div className="flex flex-col items-center md:items-start gap-3 mt-4">
                      <p className="text-gray-400 font-medium text-sm">Pagamento 100% Seguro. Acesso enviado por e-mail.</p>
                      <img src="https://i.postimg.cc/LsVHTKKJ/xxxcompra_Segura_vetor_branco1_1.png" alt="Formas de Pagamento Seguras" loading="lazy" width="300" height="40" className="h-8 object-contain opacity-70" />
                  </div>
              </div>
              
          </div>
      </section>

      {/* ==========================================
           GARANTIA (Fundo Claro/Minimalista)
      =========================================== */}
      <section className="py-16 px-6 bg-white text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
              <img src="https://i.postimg.cc/4yHMdVXn/7dias_garantia_300x300.png" alt="Garantia de 7 Dias" loading="lazy" width="300" height="300" className="w-40 h-40 mb-6 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300" />
              
              <h2 className="text-2xl font-black text-zinc-950 mb-4 uppercase tracking-wider">VOCÊ NÃO TEM NADA A PERDER</h2>
              <p className="text-xl font-bold text-rose-600 mb-4">7 dias de garantia incondicional.</p>
              <p className="text-base text-gray-600 font-medium mb-6 leading-relaxed">
                  Acesse o material, leia e aplique. Se você achar que o conteúdo não te ajudou a entender a mente masculina e mudar sua postura nos relacionamentos, basta enviar um único e-mail para o suporte.
              </p>
              <p className="text-2xl font-black text-zinc-950 uppercase">Devolvemos 100% do seu dinheiro.</p>
          </div>
      </section>

      {/* ==========================================
           RESUMINDO (Fundo Escuro Final)
      =========================================== */}
      <section className="py-20 lg:py-24 px-6 bg-zinc-950 text-white text-center border-t border-zinc-800">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-black mb-10 text-rose-500 uppercase tracking-widest">RESUMINDO</h2>
              
              <p className="text-xl font-medium mb-6 text-gray-300">Você pode continuar:</p>
              
              <div className="space-y-2 text-lg font-light text-gray-400 mb-10">
                  <p>Esperando iniciativa.</p>
                  <p>Tentando entender sinais confusos.</p>
                  <p>Repetindo padrões.</p>
              </div>
              
              <p className="text-2xl font-bold text-white mb-12 uppercase">
                  Ou pode aprender a gerar <span className="text-rose-500">impacto emocional consciente.</span>
              </p>
              
              <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 mb-12">
                  <p className="text-xl font-medium leading-relaxed">
                      Por <span className="text-rose-500 font-bold text-2xl">R$ 17,00</span>, você descobre ajustes que podem mudar completamente sua experiência nos relacionamentos.
                  </p>
              </div>
              
              <p className="text-3xl font-black mb-8 uppercase tracking-tight">A decisão está nas suas mãos.</p>
              <p className="text-xl text-gray-300 font-light mb-10">Clique agora e comece hoje.</p>
              
              <a href="https://lastlink.com/p/CA5B2A829/checkout-payment/" className="btn-pulse-green inline-block w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-black py-5 px-12 rounded-lg transition-colors text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.3)] mb-6">
                  QUERO COMEÇAR AGORA
              </a>

              <div className="flex justify-center mt-2">
                  <img src="https://i.postimg.cc/LsVHTKKJ/xxxcompra_Segura_vetor_branco1_1.png" alt="Segurança" loading="lazy" width="300" height="40" className="h-8 object-contain opacity-70" />
              </div>
          </div>
      </section>

      {/* ==========================================
           FAQ (Fundo Escuro - Perguntas Frequentes)
      =========================================== */}
      <section className="py-20 px-6 bg-zinc-900 text-white border-t border-zinc-800">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-black mb-12 text-center text-rose-500 uppercase tracking-widest">PERGUNTAS FREQUENTES</h2>
              
              <div className="space-y-4">
                  <details className="group bg-zinc-950 rounded-xl border border-zinc-800 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-100 font-bold text-lg">
                          Como eu vou receber o material?
                          <span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-rose-500 sm:p-3 group-open:bg-rose-600 group-open:text-white transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-open:hidden"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hidden group-open:block"><path d="M5 12h14"/></svg>
                          </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-zinc-800 pt-4 mt-2">
                          Imediatamente após a confirmação do pagamento, você receberá um e-mail com o seu login e senha para acessar a área de membros exclusiva onde o E-book e os Bônus estarão disponíveis para download. Pagamentos via PIX ou Cartão liberam o acesso na mesma hora.
                      </div>
                  </details>

                  <details className="group bg-zinc-950 rounded-xl border border-zinc-800 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-100 font-bold text-lg">
                          E se eu não gostar?
                          <span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-rose-500 sm:p-3 group-open:bg-rose-600 group-open:text-white transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-open:hidden"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hidden group-open:block"><path d="M5 12h14"/></svg>
                          </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-zinc-800 pt-4 mt-2">
                          Você está protegida pela nossa garantia incondicional de 7 dias. Se por qualquer motivo você não gostar do conteúdo, basta enviar um e-mail para o nosso suporte e devolveremos 100% do valor pago, sem burocracia.
                      </div>
                  </details>

                  <details className="group bg-zinc-950 rounded-xl border border-zinc-800 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-100 font-bold text-lg">
                          Quais as formas de pagamento?
                          <span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-rose-500 sm:p-3 group-open:bg-rose-600 group-open:text-white transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-open:hidden"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hidden group-open:block"><path d="M5 12h14"/></svg>
                          </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-zinc-800 pt-4 mt-2">
                          Aceitamos pagamentos via PIX (acesso imediato), Cartão de Crédito (acesso imediato) e Boleto Bancário (pode levar até 3 dias úteis para compensar).
                      </div>
                  </details>
              </div>
              
              <div className="mt-12 text-center text-gray-500 font-medium">
                  <p>Ainda tem dúvidas? Fale conosco:</p>
                  <p className="text-rose-500 font-bold">suporte@seudominio.com.br</p>
              </div>
          </div>
      </section>

      <footer className="bg-black py-8 text-center text-sm text-gray-600 font-medium">
          <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. </p>
          <p className="mt-2">Todos os direitos reservados &copy; 2026</p>
      </footer>
    </div>
  );
}
