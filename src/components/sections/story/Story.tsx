import { Photo } from '../../helpers/Photo'
import { SectionHead } from '../../helpers/SectionHead'
import { useLanguage } from '../../../lang/language'
import { STORY_TRANSLATIONS } from './Story.lang'
import sirkoStory from '../../../assets/sirko-story.jpg'

export const Story = () => {
  const { language } = useLanguage()
  const t = STORY_TRANSLATIONS[language]

  return (
    <section id="story" className="story">
      <div className="story__grid">
        <div className="story__photo-col">
          <div className="story__photo-frame">
            <Photo src={sirkoStory} alt={t.photoAlt} ratio="4 / 5" radius={22} pos="42% 50%" zoom={1.55} />
          </div>
          <div className="story__badge">{t.badgeText}</div>
        </div>
        <div>
          <SectionHead kicker={t.kicker} title={t.title} />
          <div className="story__bio">
            {t.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="story__byline">
            <div className="story__avatar">S</div>
            <div>
              <div className="story__byline-name">{t.bylineName}</div>
              <div className="story__byline-tag">{t.bylineTag}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
