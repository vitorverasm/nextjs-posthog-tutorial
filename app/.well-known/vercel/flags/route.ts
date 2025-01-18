// .well-known/vercel/flags/route.ts
import { ApiData, verifyAccess } from '@vercel/flags';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
    const access = await verifyAccess(request.headers.get('Authorization'));
    if (!access) return NextResponse.json(null, { status: 401 });

    return NextResponse.json<ApiData>({
        definitions: {
            isTestExperimentEnabled: {
                description: 'Controls whether the user is in the treatment group for test-experiment',
                origin: 'https://nextjs-posthog-tutorial-elnybr6sa-vitor-veras-projects-a6c7e8c6.vercel.app',
                options: [
                    { value: false, label: 'Control' },
                    { value: true, label: 'Treatment' },
                ],
            },
        },
    });
}
