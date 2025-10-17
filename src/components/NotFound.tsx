import { useRouter } from '@tanstack/react-router';

export default function NotFound() {
	const router = useRouter();

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
			<div className="text-center">
				<h1 className="font-bold text-6xl text-gray-900">404</h1>
				<h2 className="mt-4 font-semibold text-2xl text-gray-700">
					Page Not Found
				</h2>
				<p className="mt-2 text-gray-600">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<div className="mt-8">
					<button
						className="rounded-md bg-blue-600 px-4 py-2 font-medium text-sm text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						onClick={() => router.navigate({ to: '/' })}
						type="button"
					>
						Go Home
					</button>
				</div>
			</div>
		</div>
	);
}
