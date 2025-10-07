export default function UserProfile() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
      <img
        src="https://i.pravatar.cc/80"
        alt="User avatar"
        className="rounded-full w-16 h-16"
      />
      <div>
        <h3 className="text-lg font-bold">Juan Morales</h3>
        <p className="text-sm text-gray-500">Administrador</p>
        <p className="text-sm text-gray-500">juan.morales@novapanel.com</p>
      </div>
    </div>
  );
}
