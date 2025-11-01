import { useState } from "react";
import { QrCode, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function QRScanner() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <QrCode className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Scanner QR Code</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center p-6">
          <Card className="w-full aspect-square flex items-center justify-center bg-muted">
            <div className="text-center space-y-4">
              <QrCode className="h-16 w-16 mx-auto text-primary" />
              <p className="text-sm text-muted-foreground">
                Fonctionnalité de scan QR à venir
              </p>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
