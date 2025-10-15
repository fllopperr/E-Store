import './Contact.css'
import './Pages.css'

function Contact() {
	const githubUrl = 'https://github.com/fllopperr'

	function handleQrClick() {
		window.open(githubUrl, '_blank')
	}

	function generateQRCode() {
		const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
			githubUrl
		)}`

		return (
			<div className='git'>
				<h2 className='subtitle'>Наш GitHub</h2>
				<div className='qr-container' onClick={handleQrClick}>
					<div className='qr-code'>
						<img
							src={qrCodeUrl}
							alt='QR код для перехода на GitHub'
							className='qr-image'
						/>
					</div>
					<p className='qr-text'>
						Наведите на QR-код и отсканируйте его камерой телефона
					</p>
					<p className='qr-text'>Или нажмите чтобы перейти</p>
				</div>
			</div>
		)
	}

	return (
		<div className='page'>
			<h1 className='title'>Свяжитесь с нами</h1>

			<div className='container-contact'>
				<div className='contact-column'>
					<section className='info'>
						<h2 className='subtitle'>Наши контакты</h2>
						<p className='infoText'>
							<span className='infoStrong'>Email:</span>
							<a href='mailto:hello@example.com' className='link'>
								hello@example.com
							</a>
						</p>
						<p className='infoText'>
							<span className='infoStrong'>Телефон:</span>
							<a href='tel:+79991234567' className='link'>
								+7 (999) 123-45-67
							</a>
						</p>
						<p className='infoText'>
							<span className='infoStrong'>Адрес:</span> г. Москва, ул.
							Примерная, д. 10
						</p>
						<div className='social'>
							<a
								href='https://linkedin.com/in/yourprofile'
								className='socialLink'
							>
								Telegram
							</a>
							<a
								href='https://linkedin.com/in/yourprofile'
								className='socialLink'
							>
								VK
							</a>
							<a
								href='https://linkedin.com/in/yourprofile'
								className='socialLink'
							>
								GitHub
							</a>
						</div>
					</section>
					<section className='git'>{generateQRCode()}</section>
				</div>

				<div className='form-column'>
					<section className='form'>
						<h2 className='subtitle'>Напишите нам</h2>
						<form className='formContainer'>
							<label htmlFor='name' className='label'>
								Ваше имя:
							</label>
							<input
								type='text'
								id='name'
								name='name'
								className='input'
								required
							/>

							<label htmlFor='email' className='label'>
								Ваш email:
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='input'
								required
							/>

							<label htmlFor='message' className='label'>
								Сообщение:
							</label>
							<textarea
								id='message'
								name='message'
								rows='5'
								className='textarea'
								required
							></textarea>

							<button type='submit' className='button'>
								Отправить сообщение
							</button>
						</form>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Contact
