import { motion } from 'framer-motion';
import { fadeOutPage } from '../../animations/navigation';

import Layout from '../../components/Layout';

const EssenceAndElementsPage = () => {
  const title = 'Essence & Elements';

  return (
    <Layout title={title}>
      <motion.main
        variants={fadeOutPage}
        exit='exit'
        initial='initial'
        animate='animate'
        transition={{ duration: 0.75 }}
      >
        <section className='relative w-full h-96 lg:h-120 bg-essence bg-center'>
          <div className='absolute top-0 left-0 bg-gray-900 opacity-60 h-96 lg:h-120 w-full z-0'></div>
          <div className='absolute top-0 left-0 pb-12 lg:px-16 flex flex-col justify-center lg:flex-row lg:items-end lg:justify-between h-120 w-full'>
            <div className='text-yellow-400 text-center lg:text-left'>
              <h1 className='font-bodyMain text-lg lg:text-xl lg:pl-1 -mb-1'>
                Projects
              </h1>
              <h2 className='font-headingEandE text-4xl uppercase font-semibold text-gray-200 py-2 leading-tight'>
                Essence <span className='text-yellow-400'>& Elements</span>
              </h2>
            </div>
            <div className='flex lg:flex-row flex-col items-center lg:pb-2'>
              <a href='#' target='_blank' rel='noreferrer'>
                <button className='py-4 px-14 lg:my-0 my-5 lg:mr-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                  Visit Site
                </button>
              </a>
              <a href='#' target='_blank' rel='noreferrer'>
                <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                  View Code on Github
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className='w-full flex justify-center lg:px-0 px-10'>
          <div className='text-center text-gray-900 lg:py-10 py-5 lg:max-w-3xl'>
            <h1 className='font-bodyMain text-2xl py-5'>Technologies Used</h1>
            <div className='py-3'>
              <h2 className='font-bodyMain text-xl font-semibold tracking-wide'>
                Frontend
              </h2>
              <p className='font-bodyMain text-gray-700'>
                NextJS, TailwindCSS, Framer Motion
              </p>
            </div>
          </div>
        </section>
        <section className='lg:px-84 iPadPro:px-32 iPadWidescreen:px-32 px-10 lg:pb-10 pt-5 pb-5'>
          <div>
            <h3 className='text-3xl font-headingMain py-3'>Problem</h3>
            <p className='pt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex
              quisquam veniam maxime facilis sunt voluptatibus nemo nobis
              molestiae. Facilis nobis molestias illum quo. Quod quas quae quis
              in consectetur officia, tenetur laborum doloribus voluptates ipsam
              praesentium et assumenda nobis nihil aut asperiores placeat!
              Consequatur rerum cum, inventore deserunt repudiandae blanditiis,
              iusto reprehenderit accusantium qui, enim animi temporibus
              delectus saepe!
            </p>
            <p className='pt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quisquam voluptatem, rerum dolorum aut quas natus qui quos
              molestias facilis quo. Iusto exercitationem natus nemo, adipisci
              veritatis maiores officia totam accusantium odit repudiandae velit
              vero voluptatem, sunt veniam commodi quasi.
            </p>
            <p className='pt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quod
              provident laborum nesciunt porro blanditiis qui facere! Totam id,
              delectus laborum voluptas rem hic minus quod cumque, voluptate
              reiciendis deserunt natus perspiciatis laboriosam animi voluptatem
              quo harum esse maiores nam officiis? Eum dolorum quasi rerum illo
              error voluptas aspernatur modi maxime sit consequatur vel nobis
              quis deserunt, dolor sunt nostrum?
            </p>
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-headingMain py-3'>Solution</h3>
            <p className='pt-5'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, perferendis amet vel nam, exercitationem accusamus
              consequatur minima necessitatibus totam, atque nesciunt. Ipsa
              reprehenderit deleniti inventore alias! Ducimus reiciendis quidem
              cum placeat! Culpa vero nihil odio minima atque corrupti esse
              perferendis, totam, accusamus voluptas voluptatibus. Saepe
              accusamus recusandae, veniam officia libero voluptates expedita
              asperiores ex rem nihil in culpa ut inventore.
            </p>
            <p className='pt-5'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              officia doloribus totam sit! Consequatur ad ut nostrum nisi neque
              minima eum mollitia sunt nobis reiciendis quod dolor iusto eos
              rerum explicabo ducimus a doloremque ullam ipsum corrupti, non
              odio vel nulla? Recusandae eaque, deserunt dicta officia ex enim.
              Aperiam necessitatibus tenetur et corrupti, fugiat voluptas nisi
              sed in maxime quibusdam, aspernatur nesciunt! Est, suscipit dolor
              accusamus adipisci quasi eaque magni porro saepe dicta maiores sit
              aut corporis placeat temporibus quam!
            </p>
            <p className='pt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              vero fugiat praesentium aspernatur, totam mollitia maiores earum
              placeat eius dolores magnam necessitatibus, officiis temporibus
              suscipit eaque. Quam, id temporibus! Molestiae?
            </p>
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-headingMain py-3'>
              Key Design Choices
            </h3>
            <ul className='list-disc lg:list-inside lg:px-0 px-5'>
              <li className='pt-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                quas voluptatum numquam labore doloribus rerum, cumque sunt
                blanditiis cum excepturi?
              </li>
              <li className='pt-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati illum, architecto ipsum tempora debitis aliquam!
                Provident quos eligendi officiis perspiciatis fugiat, aliquam
                atque obcaecati delectus eius nihil dolorum a et quibusdam eum
                saepe assumenda qui natus quam facere minima aliquid!
              </li>
              <li className='pt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis, possimus vel molestiae cum perferendis facere dolore!
                Nobis error possimus eos veniam voluptate quis enim provident
                accusantium aliquam. Voluptates, quae est.
              </li>
              <li className='pt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas porro inventore quisquam mollitia unde, quam aliquam at
                quia temporibus tenetur soluta earum nam dolor consequuntur
                obcaecati eos ipsa voluptatum quo. Ab vero similique, soluta sit
                quasi reiciendis facere dolor tenetur, non rem aliquam qui
                excepturi? Necessitatibus odit officia eligendi dignissimos!
              </li>
              <li className='pt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                maxime? Possimus officiis ipsum expedita earum unde ipsa!
                Facilis quisquam ipsam officiis debitis veniam excepturi sunt
                repellat ad animi! Molestiae, velit!
              </li>
            </ul>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default EssenceAndElementsPage;
