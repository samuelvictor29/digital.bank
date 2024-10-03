import Matricula from "./components/matricula"


function App() {
  

  return (
    <main className="flex">
			<aside className="flex flex-column">
				<div className="flex flex-column">
					<div className="logo">
						<a href="/">
							<img src="public/logo.svg" />
						</a>
					</div>
					<div className="titulo">
						<h1>
							Complete os campos ao lado para abrir sua Conta
							Digital
						</h1>
						<p className="subtitulo">
							Aqui, você acontece com segurança e toda a
							praticidade que o Digital Bank oferece. Mais do que
							uma conta com cartão, você tem uma experiência
							completa com investimentos, Mimos exclusivos e muito
							mais.
						</p>
					</div>
					<small
						>&copy; Samuel Victor Moreira Gomes e Matrícula
						37016870</small>
				</div>
			</aside>
			<Matricula/>
		</main>
  )
}

export default App
