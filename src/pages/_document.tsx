import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (

			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
					<link rel="shortcut icon" href="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" />
				</Head>
				<body>
					
					<Main />
					<NextScript />

				</body>
			</Html>
		)
	}
}