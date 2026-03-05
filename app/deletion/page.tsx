import React from "react";

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 bg-background">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Request Account Deletion
        </h1>
        <p className="text-muted-foreground mb-8">
          To delete your account and all associated data, please contact our
          support team using the link below. Once verified, your data will be
          permanently removed from our system.
        </p>
        <a
          href="mailto:support@seepbaby.com?subject=Account Deletion Request"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Contact Support
        </a>
      </div>
    </main>
  );
}
