export default function formatDate (input) {

  const date = new Date(input),
    options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    };

  return new Intl.DateTimeFormat('es-AR', options).format(date);
}