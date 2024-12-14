import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Receipt, Barcode } from "lucide-react";

export default function Cashier() {
  return (
    <div className="p-6 space-y-6 relative min-h-screen pb-24">
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
          {/* Available Items Section */}
          <Card>
            <CardHeader>
              <CardTitle>Available Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input type="text" placeholder="Search items..." />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {/* Example items - replace with your actual items */}
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="cursor-pointer hover:bg-accent">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="w-full h-24 bg-muted rounded-md mb-2" />
                          <p className="font-medium">Item {item}</p>
                          <p className="text-sm text-muted-foreground">$9.99</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Order Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Current Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] border rounded-lg p-4">
                <p className="text-muted-foreground text-center mt-40">
                  No items added yet
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Payment Section - Contained within main content boundaries */}
      <div className="fixed bottom-6 left-6 right-6">
        <Card className="h-[80px] mx-auto">
          <CardContent className="p-4">
            <div className="flex justify-between items-center h-full">
              <div className="flex gap-8">
                <div>
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <p className="font-medium">$0.00</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Tax</span>
                  <p className="font-medium">$0.00</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Total</span>
                  <p className="font-bold">$0.00</p>
                </div>
              </div>
              <Button className="w-[200px]">
                <CreditCard className="mr-2 h-4 w-4" />
                Process Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}