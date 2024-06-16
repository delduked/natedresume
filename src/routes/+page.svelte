<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Card from "$lib/components/ui/card";

  </script>
<style>
    body {
        width: 100%;
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main {
        min-width: 320px;
        max-width: 540px;
        width: 70%;
        padding: 1em;
        margin: 1em;
    }
</style>
<body>
    <main>
        <div class="mt-8 mb-16">
            <div class="space-y flex items-center justify-center">
                <div class="space-y ml-5"> 
                    <div class="space-y-1">
                          <img style="border-radius: 50%; margin: 20px auto; width: 240px;" src="https://avatars.githubusercontent.com/u/92732195?s=400&u=245aac41493639944d38664cf4468f74b6c90811&v=4" alt="">
                        <h1 class="text-xl font-medium leading-none text-center">Nate Del Duca</h1>
                        <p class="text-sm text-muted-foreground text-center">
                          Full stack developer + Devops Analyst
                        </p>
                      </div>
                  </div>
            </div>
            <Separator class="my-4" />
            <div class="flex h-5 items-center space-x-4 text-sm justify-center">
             <Badge variant="outline">TS</Badge>
 
              <Separator orientation="vertical" />
              <Badge variant="outline">Go</Badge>
 
              <Separator orientation="vertical" />
              <Badge variant="outline">Svelte</Badge>

              <Separator orientation="vertical" />
              <Badge variant="outline">GitOps</Badge>
 
            </div>
          </div>
          

          


          <Card.Root class="mt-4">
            <Card.Header class="ml-2">
              <Card.Title>Canadian Tire</Card.Title>
              <Card.Description> Backend Developer - 2020 to present</Card.Description>
            </Card.Header>
            <Card.Content>
                <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Developed and maintained robust APIs using Node.js and TypeScript for both development and production environments</li>
                    <li>Leveraged Github Actions and Azure DevOps for CI/CD, contributing to streamlined operations and efficient delivery for a large agile team
                    </li>
                </ul>
            </Card.Content>
          </Card.Root>
          <Card.Root class="mt-4">
            <Card.Header>
              <Card.Title>Canadian Tire</Card.Title>
              <Card.Description> L2 Technical Specialist  - 2020 to present</Card.Description>
            </Card.Header>
            <Card.Content>
                <ul class="my-4 ml-6 list-disc [&>li]:mt-2">
                    <li>Managed VMWare Vsphere nationwide storage replication between datacenters and Citrix systems deployed in retail stores across Canada, ensuring optimal functionality and availability </li>
                    <li>Assisted in maintaining updates and security patches for RHEL platforms for Canadian Tire Financial Services
                    </li>
                </ul>
            </Card.Content>
          </Card.Root>
          <Card.Root class="mt-4">
            <Card.Header>
              <Card.Title>Mitchell and Whale Insurance Brokers</Card.Title>
              <Card.Description> Backend Developer - 2020 to present</Card.Description>
            </Card.Header>
            <Card.Content>
              <p>Card Content</p>
            </Card.Content>
          </Card.Root>
          <Card.Root class="mt-4">
            <Card.Header>
              <Card.Title>The5OfUs</Card.Title>
              <Card.Description> Backend Developer - 2020 to present</Card.Description>
            </Card.Header>
            <Card.Content>
              <p>Card Content</p>
            </Card.Content>
          </Card.Root>

    </main>
</body>


