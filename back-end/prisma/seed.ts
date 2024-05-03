import {
  PrismaClient,
  Gender,
  InvoiceStatus,
  PaymentMethod,
  Role,
} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.patient.create({
    data: {
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'password123',
      birthDate: new Date('1990-01-01'),
      gender: Gender.MALE,
      phoneNumber: '1234567890',
      postalCode: '1234567',
      address: '123 Main St, City',
    },
  });

  await prisma.medicalRecord.create({
    data: {
      patientId: 1,
      date: new Date('2022-01-01'),
      description: 'Annual checkup',
    },
  });

  await prisma.treatmentPlan.create({
    data: {
      patientId: 1,
      name: 'Hypertension Treatment',
      description: 'Treatment plan for hypertension',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-12-31'),
    },
  });

  await prisma.prescription.create({
    data: {
      patientId: 1,
      medicationName: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      duration: '30 days',
    },
  });

  await prisma.appointment.create({
    data: {
      patientId: 1,
      date: new Date('2023-07-01'),
      startTime: new Date('2023-07-01T10:00:00'),
      endTime: new Date('2023-07-01T11:00:00'),
      description: 'Follow-up appointment',
    },
  });

  await prisma.invoice.create({
    data: {
      appointmentId: 1,
      amount: 100.0,
      status: InvoiceStatus.PENDING,
    },
  });

  await prisma.payment.create({
    data: {
      invoiceId: 1,
      amount: 100.0,
      method: PaymentMethod.CREDIT_CARD,
    },
  });

  await prisma.analyticsReport.create({
    data: {
      name: 'Patient Demographics',
      description: 'Report on patient demographics',
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-12-31'),
      data: {
        totalPatients: 100,
        malePatients: 60,
        femalePatients: 40,
      },
    },
  });

  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      firstname: 'Admin',
      lastname: 'User',
      password: 'admin123',
      role: Role.ADMIN,
    },
  });

  console.log('Seed data inserted successfully.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
