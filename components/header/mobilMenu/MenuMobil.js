// "use client"
// import { useState } from 'react'
import { Divider } from 'antd'
import { ToolOutlined } from '@ant-design/icons'
import Link from 'next/link'


export const MenuMobil = ({ onClose }) => {
	// const [isOpen, setIsOpen] = useState(false)

	// const showDrawerMenuMobil = () => {
	// 	setIsOpen(true)
	// }


	return (
		<div className='h-full'>
			<nav className='h-full'>
				<ul className='h-full flex flex-col justify-start items-start text-sm cursor-pointer'>
					<li>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Главная страница
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-start items-center w-full'>
						<Link href='/'
							className="cursor-pointer mr-2"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Квадро бочки
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Овало бочки
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Бани бочки
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Купели композитные
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Купели натуральные
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Гриль домики
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Финские бани
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Домики кемпинговые
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Аксессуары
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Видео
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Выставочная площадка
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/o-kompanii'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							О компании
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/o-kompanii'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Отзывы 
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/kontakty'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Контакты
						</Link>
					</li>

				</ul>
			</nav>
		</div>
	)
}
