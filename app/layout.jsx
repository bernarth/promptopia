import '@styles/globals.css';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ childern }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>

        <main className='app'>
          {childern}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
