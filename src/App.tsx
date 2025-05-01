function PrivacyPolicy() {
  return (
    <div className="h-screen w-screen flex flex-col bg-bg font-poppins p-8">
      <div className="m-auto max-w-3xl text-left">
        <h1 className="text-4xl font-bold mb-6">
          Privacy Policy for Simple Tab
        </h1>
        <p className="mb-4">
          Simple Tab is designed with your privacy in mind. We do not collect,
          store, or share any personal information.
        </p>
        <h2 className="text-2xl font-semibold mb-3">What We Collect</h2>
        <p className="mb-4">
          We do not collect any data. Simple Tab runs entirely in your browser
          and does not communicate with any external servers.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Permissions</h2>
        <p className="mb-4">
          Simple Tab may ask for permission to store your preferences (such as
          theme or custom links) locally in your browser. This data is stored
          only on your device and never sent anywhere.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Third Parties</h2>
        <p className="mb-4">
          We do not use any third-party analytics, advertising, or tracking
          services.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Changes</h2>
        <p className="mb-4">
          If this policy ever changes, we will update it here and in the Chrome
          Web Store listing.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
