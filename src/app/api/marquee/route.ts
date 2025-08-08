import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/authOptions";
import { getCarousel } from "@/lib/getCarousel";
import { sortCarousel } from "@/lib/sortCarousel";
import { deleteCarouselImage } from "@/lib/deleteCarouselImage";
import { uploadCarouselImages } from "@/lib/uploadCarouselImages";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // no caching

const ALLOWED_EMAILS = JSON.parse(process.env.ALLOWED_EMAILS || "[]");

async function isAuthorized() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json(
      { error: "No se ha autenticado." },
      { status: 401 }
    );
  }

  const userEmail = session.user.email;
  if (!userEmail || !ALLOWED_EMAILS.includes(userEmail)) {
    return NextResponse.json(
      { error: "No estás autorizado a acceder a esta ruta." },
      { status: 403 }
    );
  }

  return true;
}

export async function GET() {
  const resAuth = await isAuthorized();
  if (resAuth !== true) return resAuth;
  const images = await getCarousel();
  return NextResponse.json(images);
}

export async function POST(req: NextRequest) {
  const resAuth = await isAuthorized();
  if (resAuth !== true) return resAuth;

  const { fromIndex, toIndex } = await req.json();

  if (fromIndex == null || toIndex == null) {
    return NextResponse.json(
      { error: "Falta el índice de la imagen a reordenar." },
      { status: 400 }
    );
  }

  try {
    const images = await sortCarousel(fromIndex, toIndex);
    return NextResponse.json(images);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error al reordenar el carrusel." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const resAuth = await isAuthorized();
  if (resAuth !== true) return resAuth;

  const { index } = await req.json();

  if (index == null) {
    return NextResponse.json(
      { error: "Falta el índice de la imagen a borrar." },
      { status: 400 }
    );
  }

  try {
    const images = await deleteCarouselImage(index);
    return NextResponse.json(images);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error al borrar la imagen." },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const resAuth = await isAuthorized();
  if (resAuth !== true) return resAuth;

  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];
    const images = await uploadCarouselImages(files);
    return NextResponse.json(images);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error al subir la imagen." },
      { status: 500 }
    );
  }
}