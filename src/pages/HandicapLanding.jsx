import React, { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CalendarDays, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HandicapLanding({ gender = 'men', title = "Men's Handicap", oppositeUrl = '/ladies-handicap/' }) {
  const shellRef = useRef(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`/wp-json/wingate-tools/v1/handicaps/public?gender=${gender}`);
        const json = await res.json();
        setItems(Array.isArray(json?.items) ? json.items : []);
      } catch (err) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [gender]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline();
      intro
        .from('.handicap-land-kicker', { y: 18, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.handicap-land-title', { y: 28, opacity: 0, duration: 0.75, ease: 'power3.out' }, '-=0.15')
        .from('.handicap-land-sub', { y: 18, opacity: 0, duration: 0.55, ease: 'power2.out' }, '-=0.3');

      const featuredCard = shellRef.current?.querySelector('.handicap-featured-card');
      if (featuredCard) {
        gsap.fromTo(
          featuredCard,
          { y: 32, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: 'power2.out',
            delay: 0.08,
            clearProps: 'transform,opacity,visibility',
          }
        );
      }

      const cards = shellRef.current?.querySelectorAll('.handicap-land-card');
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { y: 18, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power2.out',
            delay: 0.12,
            clearProps: 'transform,opacity,visibility',
          }
        );
      }
    }, shellRef);
    return () => ctx.revert();
  }, [items.length, loading]);

  const featured = items[0] || null;
  const others = useMemo(() => items.slice(1), [items]);
  const oppositeLabel = gender === 'men' ? "Ladies' Handicap" : "Men's Handicap";

  return (
    <div ref={shellRef} className="min-h-screen bg-brand-gray pb-16">
      <section className="relative overflow-hidden bg-brand-blue text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,204,0,0.12),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_32%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue to-[#122a66]" />
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <div className="max-w-4xl rounded-2xl border border-white/18 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-sm md:p-10">
            <p className="handicap-land-kicker text-xs uppercase tracking-[0.24em] text-brand-yellow font-bold">Wingate Leaderboards</p>
            <h1 className="handicap-land-title mt-4 font-cinzel text-white text-5xl leading-tight md:text-7xl">
              {title}
            </h1>
            <p className="handicap-land-sub mt-4 max-w-3xl text-white/85 text-lg">Latest published handicap boards with full season and event stats.</p>
            <a
              href={oppositeUrl}
              className="handicap-land-switch group mt-7 inline-flex items-center gap-2 rounded-sm border-2 border-white bg-white/8 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-blue hover:shadow-[0_14px_30px_-16px_rgba(255,204,0,0.8)]"
              style={{
                display: 'inline-flex',
                color: '#ffffff',
                borderColor: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.08)',
                textDecoration: 'none',
              }}
            >
              <span className="text-white transition-colors duration-300 group-hover:text-brand-blue">Open {oppositeLabel}</span>
              <ArrowRight size={14} className="text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-blue" />
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-12">
        {featured ? (
          <a href={featured.permalink} className="handicap-featured-card grid overflow-hidden rounded-3xl border border-brand-blue/10 bg-white shadow-lg !no-underline md:grid-cols-[1.25fr_1fr]">
            <div className="relative min-h-[320px] md:min-h-[420px] bg-brand-blue/10 bg-cover bg-center" style={{ backgroundImage: `url('${featured.heroImageUrl || featured.featuredImageUrl || ''}')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 inline-flex rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue">Featured</span>
            </div>
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">Latest Handicap</p>
              <h2 className="mt-3 font-cinzel text-4xl leading-tight text-brand-blue md:text-5xl">{featured.title}</h2>
              <p className="mt-3 text-sm text-brand-blue/70 uppercase tracking-[0.12em]">{featured.seasonLabel || 'Season board'} {featured.eventName ? `• ${featured.eventName}` : ''}</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-brand-blue/85">
                <span className="inline-flex items-center gap-2 rounded-md border border-brand-blue/10 bg-brand-blue/[0.03] px-3 py-2"><Users size={15} />{featured.seasonStats?.totalPlayers || 0} Players</span>
                <span className="inline-flex items-center gap-2 rounded-md border border-brand-blue/10 bg-brand-blue/[0.03] px-3 py-2"><CalendarDays size={15} />{featured.eventDate || 'Date TBD'}</span>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 self-start rounded-sm bg-brand-blue px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-yellow hover:text-brand-blue">
                View Handicap
                <ArrowRight size={14} />
              </span>
            </div>
          </a>
        ) : null}

        <div className="mt-10">
          <h3 className="font-cinzel text-3xl text-brand-blue">Other Handicap Boards</h3>
          {loading ? <p className="mt-3 text-sm text-brand-blue/70">Loading handicap boards...</p> : null}
          {!loading && !items.length ? <p className="mt-3 text-sm text-brand-blue/70">No handicap boards published yet.</p> : null}
          <div className="handicap-board-grid mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <a
                key={item.id}
                href={item.permalink}
                className="handicap-land-card group relative overflow-hidden rounded-xl border border-brand-blue/12 bg-white p-5 shadow-sm !no-underline transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/60 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-yellow/70 to-brand-blue/70 opacity-70 group-hover:opacity-100 transition-opacity" />
                <p className="text-[10px] uppercase tracking-[0.16em] text-brand-blue/50">{item.seasonLabel || 'Season Board'}</p>
                <h4 className="mt-2 font-cinzel text-2xl !text-brand-blue group-hover:!text-brand-blue">{item.title}</h4>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-brand-blue/60">{item.eventName || 'Event Update'}</p>
                <p className="mt-3 text-sm text-brand-blue/70">{item.seasonStats?.totalPlayers || 0} players • Avg index {item.seasonStats?.averageIndex || 0}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue/60 group-hover:text-brand-blue transition-colors">
                  Open Board
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
