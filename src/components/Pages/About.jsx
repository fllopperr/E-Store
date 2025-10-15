import './About.css'
import './Pages.css'

function About() {
	return (
		<div className='page'>
			<h1 className='title'>О нас</h1>

			<div className='about-content'>
				<section className='about-section'>
					<p className='about-text'>
						Мы создаем цифровые продукты, которые решают реальные проблемы и
						приносят пользу нашим клиентам.
					</p>
				</section>

				<section className='about-section'>
					<h2 className='subtitle'>Наша история</h2>
					<p className='about-text'>
						Все началось в гараже с двух ноутбуков и большой мечты. Сегодня наша
						команда объединяет талантливых разработчиков, дизайнеров и
						маркетологов, работающих по всему миру.
					</p>
				</section>

				<section className='about-section'>
					<h2 className='subtitle'>Наши ценности</h2>
					<ul className='about-list'>
						<li>
							<strong>Качество:</strong> Мы не выпускаем продукт, пока сами не
							будем им довольны.
						</li>
						<li>
							<strong>Открытость:</strong> Мы честны с клиентами и друг с
							другом.
						</li>
						<li>
							<strong>Развитие:</strong> Мы постоянно учимся и внедряем новые
							технологии.
						</li>
					</ul>
				</section>
			</div>
		</div>
	)
}

export default About
