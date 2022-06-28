import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()
  
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLesson = slug === props.slug;
  
  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>
      
      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-orange-500 transition-colors ${isActiveLesson ? 'bg-gray-500' : ''}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (<span className="text-sm text-orange-500 font-medium flex items-center gap-1">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-1">
            <Lock size={20} />
            Em breve
          </span>
          )}
          
          <span className="text-xs rounded py-[0.125rem] px-2 text-red-600 border border-red-600 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-400 mt-5 block group-hover:text-red-500">
          {props.title}
        </strong>
      </div>
    </Link>
  )
}