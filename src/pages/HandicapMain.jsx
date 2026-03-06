import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Trophy, Users } from 'lucide-react';

export default function HandicapMain() {
  const shellRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/wp-json/wingate-tools/v1/handicaps/public?gender=men');
        const data = await res.json();
        setCount(Array.isArray(data?.items) ? data.items.length : 0);
      } catch (error) {
        setCount(0);
      }
    })();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.handicap-main-card', { y: 24, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out' });
    }, shellRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={shellRef} className="min-h-screen bg-brand-gray py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-brand-blue p-10 text-white md:p-14">
          <p className="text-xs uppercase tracking-[0.24em] text-brand-yellow">Wingate Park</p>
          <h1 className="mt-3 font-cinzel text-4xl md:text-6xl">Handicap Hub</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Access live handicap tables and keep your competition standings up to date.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="handicap-main-card rounded-2xl border border-brand-blue/10 bg-white p-7 shadow-sm">
            <div className="inline-flex rounded-full bg-brand-yellow/20 p-3 text-brand-blue"><Trophy size={22} /></div>
            <h2 className="mt-4 font-cinzel text-3xl text-brand-blue">Men&apos;s Handicap</h2>
            <p className="mt-2 text-brand-blue/70">
              Premium single-page leaderboard with export options and quick search.
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-brand-yellow">{count} Published Players</p>
            <a href="/mens-handicap/" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline hover:bg-brand-yellow hover:text-brand-blue transition-colors">
              Open Men&apos;s Handicap
              <ArrowRight size={14} />
            </a>
          </article>

          <article className="handicap-main-card rounded-2xl border border-brand-blue/10 bg-white p-7 shadow-sm">
            <div className="inline-flex rounded-full bg-brand-yellow/20 p-3 text-brand-blue"><Trophy size={22} /></div>
            <h2 className="mt-4 font-cinzel text-3xl text-brand-blue">Ladies Handicap</h2>
            <p className="mt-2 text-brand-blue/70">
              Separate ladies leaderboard with the same featured-post and stats workflow.
            </p>
            <a href="/ladies-handicap/" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline hover:bg-brand-yellow hover:text-brand-blue transition-colors">
              Open Ladies Handicap
              <ArrowRight size={14} />
            </a>
          </article>

          <article className="handicap-main-card rounded-2xl border border-brand-blue/10 bg-white p-7 shadow-sm">
            <div className="inline-flex rounded-full bg-brand-blue/10 p-3 text-brand-blue"><Users size={22} /></div>
            <h2 className="mt-4 font-cinzel text-3xl text-brand-blue">Admin Editing</h2>
            <p className="mt-2 text-brand-blue/70">
              Club admins can add, edit and publish handicap rows from the Wingate Handicap Manager.
            </p>
            <a href="/wp-admin/admin.php?page=wingate-handicap-manager" className="mt-6 inline-flex items-center gap-2 rounded-sm border border-brand-blue/20 px-5 py-3 text-xs font-bold uppercase tracking-widest text-brand-blue !no-underline hover:bg-brand-blue hover:text-white transition-colors">
              Open Handicap Manager
              <ArrowRight size={14} />
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}
