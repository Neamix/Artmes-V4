const integrations = [
    { name: 'Gmail', color: 'bg-red-50 text-red-600 border-red-100' },
    { name: 'Slack', color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { name: 'HubSpot', color: 'bg-orange-50 text-orange-600 border-orange-100' },
    { name: 'Salesforce', color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { name: 'Zapier', color: 'bg-orange-50 text-orange-500 border-orange-100' },
    { name: 'LinkedIn', color: 'bg-sky-50 text-sky-600 border-sky-100' },
    { name: 'Outlook', color: 'bg-blue-50 text-blue-700 border-blue-100' },
    { name: 'Notion', color: 'bg-gray-50 text-gray-700 border-gray-200' },
];

export default function Integrations() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Works with the tools you already use
                </h2>
                <p className="mt-3 text-gray-500 text-base max-w-md mx-auto">
                    Connect Artmes to your existing stack in minutes — no developer required.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {integrations.map((integration) => (
                    <div
                        key={integration.name}
                        className={`px-5 py-2.5 rounded-full border text-sm font-semibold ${integration.color}`}
                    >
                        {integration.name}
                    </div>
                ))}
            </div>
            <p className="text-center text-xs text-gray-400">+ 50 more integrations via Zapier</p>
        </section>
    );
}
