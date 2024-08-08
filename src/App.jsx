import './App.css';

function App() {
  return (
    <>
      <div className='w-full h-screen bg-slate-200 flex items-center justify-center'>
        <div className='w-1/3 bg-slate-100 flex rounded-lg shadow-lg shadow-gray-400/50 flex-col'>
          <div className='w-full h-7 bg-blue-600 rounded-t-lg'></div> 
          {/* div para o azulzinho em cima */}
          <div className='w-full p-6 flex flex-row justify-start gap-10'>
            {/* div com a foto e nome do guilherme */}
            <div className='w-1/3'>
              <img className=' rounded-full shadow-lg shadow-gray-400/50' src="https://media.licdn.com/dms/image/C4D03AQHP88GE3ajztw/profile-displayphoto-shrink_200_200/0/1660262892182?e=2147483647&v=beta&t=YjxVjKbiVNxgxr4kOCpORTbAW8xxCVHvO8Uu5EDFTOw" alt="" />
            </div>
            <div className='flex flex-col mt-8'>
              <h2 className='text-4xl'>Guilherme Pires</h2>
              <p className='text-gray-500 text-xs'>Sistema Fiep - Supervisor de Curso</p>
            </div>
          </div>
          <div className='w-full flex flex-row p-6 bg-'>
            <div className='bg-slate-300 flex w-full rounded-r-lg'>
              <div className='bg-blue-600 w-3/5 p-6 flex flex-col gap-6 rounded-lg z-10 items-center shadow-lg shadow-gray-400/100'>
                {/* informacoes do guilherme */}
                <h2 className='text-3xl'>Info</h2>
                <p className='text-slate-300 text-sm'>(41) 99999-9999</p>
                <p className='text-slate-300 text-sm underline underline-offset-4'>guilherme@gmail.com</p>
                <p className='text-slate-300 text-sm'>N12345678</p>
              </div>
              <div className='bg-slate-300 w-full rounded-r-lg flex flex-col items-center p-6'>
                <h2 className='text-3xl mb-6'>Equipe</h2>
                <div>
                  {/* equipe do guilherme */}
                  <p className='text-sm'>Kethlin Priscila</p>
                  <p className='text-sm'>Stati Supervisor</p>
                  <p className='text-sm'>Nicolas Marques</p>
                  <p className='text-sm'>Teste Teste</p>
                  <p className='text-sm'>Teste Teste</p>
                  <p className='text-sm'>Teste Teste</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default App;
