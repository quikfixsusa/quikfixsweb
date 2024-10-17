import UserIcon from '@/app/components/svg/icons/UserIcon';

export default function UserCard({ user }: { user: any }) {
  function parseDate({ seconds, nanoseconds }: { seconds: number; nanoseconds: number }) {
    // Convierte seconds a milisegundos y nanoseconds a milisegundos
    const milliseconds = seconds * 1000 + nanoseconds / 1000000;

    // Crea un objeto Date con los milisegundos
    const date = new Date(milliseconds);

    // Formatea la fecha en texto en inglés
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  function parseUserType(userType: string) {
    if (userType === 'admin') return 'Admin';
    if (userType === 'reviewer') return 'Reviewer';
    if (userType === 'customer') return 'Customer';
    if (userType === 'contractor') return 'Contractor';
    if (userType === 'driver') return 'Driver';
  }
  return (
    <div className="flex-3 flex flex-col gap-3 rounded-xl border border-gray-300 p-4">
      <div className="flex w-full items-center justify-between gap-2">
        <p className="text-sm font-medium text-gray-600">{parseDate(user.createdAt)}</p>
        <p className="rounded-sm bg-yellowQuik px-4 text-sm text-black">{parseUserType(user.userType)}</p>
      </div>
      <div className="flex items-center gap-3">
        {!user.image && (
          <div className="rounded-full bg-gray-200 p-[13px]">
            <UserIcon size={18} color="gray" />
          </div>
        )}
        {user.image && <img alt={user.username} className="h-11 w-11 rounded-full" src={user.image} />}
        <div>
          <p className="font-semibold">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs text-gray-600">{user.email}</p>
        </div>
      </div>
      <hr />
      <button className="w-full rounded-md bg-blueQuik py-2 font-medium text-white transition-all duration-150 hover:bg-blue-700">
        Accept
      </button>
    </div>
  );
}
