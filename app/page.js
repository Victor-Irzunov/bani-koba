'use client'
import { ModalUniversal } from '@/components/modal/ModalUniversal';
import Image from 'next/image';
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [isActive, setIsActive] = useState({
    konsultaciya: false,
    tel: false
  });
  const handleCancel = () => {
    setIsModalOpen(false)
  };

  const showModal = (title, active) => {
    setIsModalOpen(true)
    setTitle(title)
    if (active === "konsultaciya") {
      setIsActive(prev => ({ ...prev, konsultaciya: true, tel: false }))
    }
    if (active === "tel") {
      setIsActive(prev => ({ ...prev, konsultaciya: false, tel: true, }))
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full min-h-screen bg-cover fon bg-center' />

      <section className='container mx-auto relative xz:pt-16 xs:pt-24'>
        <div className='flex justify-between sd:w-1/2 xz:w-full'>
          <div className='pt-20 text-white'>
            <h1 className='font-bold xs:text-4xl xz:text-3xl uppercase'>
              Мобильные передвижные <span className='text-yellow-400'>бани</span> в Минске
            </h1>
            <p className="font-light mt-4 text-sm">
              Добро пожаловать в мир роскошных мобильных бань! Мы рады приветствовать вас на нашем сайте, где вы найдете настоящий арсенал мобильных саун и бань для вашего уюта и релаксации.
            </p>

            <p className='uppercase font-light xx:text-base xz:text-sm mt-8 text-yellow-400'>
              Собственное производство | Доставка
            </p>

            <div className="mt-12 flex xz:flex-col-reverse xs:flex-row xz:items-start">
              <button
                className='text-white px-5 xz:mt-6 xs:mt-0 py-1 font-light rounded-2xl text-sm bg-[#65BB1E]'
                onClick={() => showModal("Получить консультацию", "konsultaciya")}
              >
                Получить консультацию
              </button>
              {/* <button
                className='xz:ml-0 xs:ml-5 px-5 py-1 font-light rounded-2xl text-sm bg-[#65BB1E]'
                onClick={() => showModal("Заказать звонок", "tel")}
              >
                Заказать звонок
              </button> */}
            </div>
          </div>
        </div>
      </section>


      <section className='relative xz:py-10 xs:py-24 bg-white w-full mt-24'>
        <article className='container mx-auto'>
          <Image src='/main/2.webp' alt='' width={150} height={150} className='float-left pr-3 pb-1' />
          <h2 className='uppercase font-bold mb-2 text-lg'>
            Производство мобильных бань
          </h2>
          <div className='text-justify'>
            <p className='mb-2'>
              Мобильные бани - это не просто продукты, это искусство создания места, где можно расслабиться, восстановиться и насладиться душевным теплом. Наши мобильные бани - это сплав утонченного дизайна, высококачественных материалов и инновационных технологий.
            </p>
            <p className='mb-2'>
              Мы гордимся тем, что предлагаем вам мобильные бани, которые сочетают в себе комфорт, функциональность и стиль. Независимо от того, вы ищете баню для личного пользования, отдыха с семьей или развития своего бизнеса, у нас есть идеальное решение для вас.
            </p>
            <p className='mb-2'>
              Погрузитесь в мир расслабления и уюта с нашими мобильными банями. Исследуйте наши модели, выбирите себе ту, которая соответствует вашим потребностям, и начните свой путь к гармонии и здоровью.
            </p>
            <p className='font-semibold'>
              Спасибо, что выбрали нас. Мы готовы сделать вашу жизнь теплее, комфортнее и незабываемо приятной с нашими мобильными банями."
            </p>
          </div>
        </article>
      </section>


      <section className='bg-white relative py-24 w-full'>
        <article className='container mx-auto'>
          <h3 className='text-center font-bold text-xl uppercase'>
            Почему покупают мобильные бани у нас?
          </h3>
          <div className='text-justify mt-5'>
            <p className='mb-6'>
              Компания ООО "Коба-групп" - ваш надежный партнер в мире уютных мобильных бань, стильных гриль-домиков, аутентичных финских саун и удобных домиков для кемпинга. Мы гордимся своим опытом и качественными изделиями, предлагая вам ряд преимуществ:
            </p>

            <p className='mb-1 font-semibold text-center uppercase'>
              Собственное производство
            </p>
            <p className='mb-5'>
              Наши изделия создаются на нашем собственном производстве, расположенном в Михановичах, МЛЦ. Это позволяет нам контролировать каждый этап производства и обеспечивать высший стандарт качества.
            </p>

            <p className='mb-1 font-semibold text-center uppercase'>
              Выставочные площадки
            </p>
            <p className='mb-5'>
              Посетите наши выставочные площадки в Минске, по адресам: ул. Чапаева, 3 и Логойский тракт, 50, Парковка БЦ "Аквабел". Здесь вы сможете оценить наши изделия, посмотреть их вживую и получить профессиональную консультацию.
            </p>

            <p className='mb-1 font-semibold text-center uppercase'>
              Богатый опыт
            </p>
            <p className='mb-5'>
              Мы успешно занимаемся производством мобильных бань и других изделий с 2015 года, накопив богатый опыт и уверенность в качестве наших товаров.
            </p>

            <p className='mb-1 font-semibold text-center uppercase'>
              Индивидуальный подход
            </p>
            <p className='mb-5'>
              Мы понимаем уникальные потребности каждого клиента и готовы изготовить изделие любого бюджета и размера, учитывая ваши требования и пожелания.
            </p>

            <p className='mb-1 font-semibold text-center uppercase'>
              Высокое качество на долгие годы
            </p>
            <p className='mb-5'>
              Все наши изделия изготавливаются из высококачественных и натуральных материалов, гарантируя долгий срок службы и надежность.
            </p>

            <p className='mb-1 font-semibold text-center uppercase'>
              Доставка
            </p>
            <p className='mb-5'>
              Мы осуществляем доставку наших изделий в пределах 100 километров от Минска, обеспечивая удобство для наших клиентов.
            </p>


            <p className='mb-1 font-semibold text-center uppercase'>
              Качественные материалы
            </p>
            <p className='mb-5'>
              Мы используем только лучшие материалы и компоненты, чтобы каждое изделие соответствовало самым высоким стандартам качества.
            </p>

            <p className='mb-1 font-semibold text-center uppercase'>
              Аксессуары
            </p>
            <p className='mb-5'>
              У нас вы найдете широкий выбор аксессуаров и дополнительных опций, чтобы сделать ваше изделие еще более функциональным и комфортным.
            </p>

            <p className='font-bold'>
              Мы стремимся делать вашу жизнь теплее, комфортнее и незабываемо приятной с нашими продуктами. Полагайтесь на нас в создании вашего уюта и релаксации.
            </p>
          </div>
        </article>
      </section>



      <section className='container mx-auto relative py-24'>
        <p className='text-center font-semibold text-white'>
          Не упустите шанс обогатить свою жизнь комфортом и уютом! Закажите у нас мобильную баню, гриль-домик, финскую сауну или домик для кемпинга уже сегодня. Посетите наши выставочные площадки в Минске, оцените качество и стиль наших изделий, а также получите профессиональную консультацию от наших экспертов.

          Сделайте первый шаг к более качественной и комфортной жизни прямо сейчас! Нажмите на кнопку "Заказать" или позвоните нам по номеру +375 29 539-56-12, и мы с удовольствием поможем вам выбрать и приобрести идеальное решение для вашего отдыха и развлечений.
        </p>
      </section>

      <ModalUniversal
        isModalOpen={isModalOpen}
        title={title}
        handleCancel={handleCancel}
        isActive={isActive}
      />
    </main>
  )
}
