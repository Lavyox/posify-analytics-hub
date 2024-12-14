import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Receipt, Barcode } from "lucide-react";

export default function Cashier() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cashier</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Receipt className="mr-2 h-4 w-4" />
            New Receipt
          </Button>
          <Button variant="outline" size="sm">
            <Barcode className="mr-2 h-4 w-4" />
            Scan Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input type="text" placeholder="Search products..." />
                <div className="h-[400px] border rounded-lg p-4">
                  <p className="text-muted-foreground text-center mt-[180px]">
                    No items added yet
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
              </div>
              <Button className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Process Payment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}