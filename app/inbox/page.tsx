import Conversation from "../components/inbox/Conversation";

const InboxPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h2 className="my-6 mb-6 text-2xl">Inbox Page</h2>
      <Conversation />
      <Conversation />
      <Conversation />
    </main>
  );
};

export default InboxPage;
