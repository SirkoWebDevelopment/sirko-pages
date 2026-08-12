import { Photo } from './Photo'
import { SectionHead } from './SectionHead'
import sirkoStory from '../assets/sirko-story.jpg'

export const Story = () => {
  return (
    <section id="story" className="story">
      <div className="story__grid">
        <div className="story__photo-col">
          <div className="story__photo-frame">
            <Photo src={sirkoStory} alt="Sirko the corgi napping" ratio="4 / 5" radius={22} pos="42% 50%" zoom={1.55} />
          </div>
          <div className="story__badge">he supervises 🐾</div>
        </div>
        <div>
          <SectionHead kicker="Why we do this" title="Kindness is something you practice." />
          <div className="story__bio">
            <p>
              We're a small team of Ukrainian software developers. By day we build software full-time — and on the side, we build websites for
              non-profits who can't afford one.
            </p>
            <p>
              We grew up believing kindness isn't just something you talk about; it's something you do. Sirko Dev Studio is how we practice it:
              real, professional websites, given freely, so the organizations doing good can be found, trusted, and supported — while we keep
              sharpening our craft.
            </p>
            <p>And yes — Sirko is part of the team. He sits in on every project review.</p>
          </div>
          <div className="story__byline">
            <div className="story__avatar">S</div>
            <div>
              <div className="story__byline-name">Sirko Dev Studio</div>
              <div className="story__byline-tag">A small team · One corgi · Many good causes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
