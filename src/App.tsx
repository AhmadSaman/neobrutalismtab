import { Button } from "./components/ui/button";

function PrivacyPolicy() {
  return (
    <div className="h-screen w-screen flex flex-col gap-12 justify-center bg-bg font-poppins p-8">
      <Button
        asChild
        className="px-4 py-2 w-fit mx-auto bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <a
          href="https://chromewebstore.google.com/detail/fckmldiibgmjlfojaenadmofjfmeihik?utm_source=item-share-cb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Extension
        </a>
      </Button>
      <div className="mx-auto max-w-3xl text-left">
        <h1 className="text-4xl font-bold">Privacy Policy for Simple Tab</h1>
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
