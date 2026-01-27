import React from 'react';

const Impressum = () => {
  return (
    <div className="w-full bg-slate-50 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <p className="mb-2">
            <strong>Name:</strong> Eric Reuhl
          </p>
          <p className="mb-2">
            <strong>Email:</strong> eric.reuhl2802@gmx.de
          </p>
          <p className="mb-2">
            <strong>Addresse:</strong> Baumweg 31, 60316 Frankfurt am Main,
            Deutschland
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
          <p className="text-slate-700">
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte wird keine Haftung übernommen. Diese Website dient
            ausschließlich der privaten, informativen Darstellung. Für Inhalte
            externer Links wird keine Verantwortung übernommen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
          <p className="text-slate-700">
            © {new Date().getFullYear()} Eric Reuhl. All rights reserved.
          </p>
          <p className="text-slate-700">
            The legal notice is provided in German for legal compliance in
            Germany.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Impressum;
